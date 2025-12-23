#!/bin/bash

# Script to reprocess videos: remove black bars and upload to Cloudinary with better quality
# Usage: ./scripts/reprocess-videos.sh

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Cloudinary credentials (from environment or .env)
CLOUDINARY_CLOUD_NAME="dmsciazqx"
CLOUDINARY_UPLOAD_PRESET="ml_default" # You may need to adjust this

# Input and output directories
INPUT_DIR="public/videos/.originals"
OUTPUT_DIR="public/videos/processed"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Array of videos to process (the ones with black bars)
declare -a VIDEOS=(
  "water-hero.mp4"
  "storm-hero.mp4"
  "mold-hero.mp4"
)

# Function to detect and crop black bars
process_video() {
  local input_file="$1"
  local output_file="$2"
  local filename=$(basename "$input_file")

  echo -e "${BLUE}Processing: $filename${NC}"

  # Detect crop parameters using ffmpeg cropdetect filter
  echo -e "${YELLOW}Detecting black bars...${NC}"

  # Run cropdetect on the first 10 seconds to find crop parameters
  crop_params=$(ffmpeg -i "$input_file" -t 10 -vf cropdetect=24:16:0 -f null - 2>&1 | \
    grep -o 'crop=[0-9:]*' | tail -1)

  if [ -z "$crop_params" ]; then
    echo -e "${YELLOW}No black bars detected, using original dimensions${NC}"
    crop_params="crop=iw:ih:0:0"
  else
    echo -e "${GREEN}Detected crop parameters: $crop_params${NC}"
  fi

  # Process video with detected crop parameters and better quality settings
  echo -e "${YELLOW}Processing video with higher quality...${NC}"

  ffmpeg -i "$input_file" \
    -vf "$crop_params,scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -c:v libx264 \
    -preset slow \
    -crf 18 \
    -c:a aac \
    -b:a 192k \
    -movflags +faststart \
    -y \
    "$output_file"

  echo -e "${GREEN}✓ Processed: $filename${NC}"
}

# Function to upload to Cloudinary
upload_to_cloudinary() {
  local file_path="$1"
  local public_id="$2"
  local filename=$(basename "$file_path")

  echo -e "${BLUE}Uploading to Cloudinary: $filename${NC}"
  echo -e "${YELLOW}Public ID: $public_id${NC}"

  # Upload using Cloudinary CLI (if available) or curl
  if command -v cld &> /dev/null; then
    cld uploader upload "$file_path" \
      --public-id "$public_id" \
      --resource-type video \
      --overwrite true \
      --quality-analysis true
  else
    echo -e "${YELLOW}Cloudinary CLI not found. Please upload manually or install: npm install -g cloudinary-cli${NC}"
    echo -e "${YELLOW}File ready for upload: $file_path${NC}"
    echo -e "${YELLOW}Upload to: blue-restoration/videos/$(dirname $public_id)/${NC}"
  fi
}

# Main processing loop
echo -e "${GREEN}=== Video Reprocessing Script ===${NC}"
echo -e "${BLUE}Processing ${#VIDEOS[@]} videos...${NC}\n"

for video in "${VIDEOS[@]}"; do
  input_path="$INPUT_DIR/$video"
  output_path="$OUTPUT_DIR/$video"

  if [ ! -f "$input_path" ]; then
    echo -e "${YELLOW}⚠ Warning: $input_path not found, skipping...${NC}"
    continue
  fi

  # Process the video
  process_video "$input_path" "$output_path"

  # Determine the Cloudinary public_id based on filename
  case "$video" in
    "water-hero.mp4")
      public_id="blue-restoration/videos/water-damage/water-hero"
      ;;
    "storm-hero.mp4")
      public_id="blue-restoration/videos/storm-damage/storm-hero"
      ;;
    "mold-hero.mp4")
      public_id="blue-restoration/videos/mold-evaluation/mold-hero"
      ;;
  esac

  echo -e "\n${BLUE}Processed file location: $output_path${NC}"
  echo -e "${YELLOW}Ready to upload with public_id: $public_id${NC}\n"
done

echo -e "${GREEN}=== Processing Complete! ===${NC}"
echo -e "${BLUE}Processed files are in: $OUTPUT_DIR${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. Review the processed videos in $OUTPUT_DIR"
echo -e "2. Upload to Cloudinary manually or using Cloudinary CLI"
echo -e "3. Update the timestamps in src/constants/videos.ts if needed"
