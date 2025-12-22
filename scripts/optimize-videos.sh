#!/bin/bash

# Optimize videos with ffmpeg before Cloudinary upload
# Usage: ./scripts/optimize-videos.sh

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}=== Video Optimization Script ===${NC}\n"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
  echo -e "${RED}Error: ffmpeg is not installed${NC}"
  echo "Install with: brew install ffmpeg"
  exit 1
fi

# Array of videos to optimize
videos=(
  "public/videos/home/home-hero.mp4"
  "public/videos/water-damage/water-hero.mp4"
  "public/videos/fire-damage/fire-hero.mp4"
  "public/videos/storm-damage/storm-hero.mp4"
  "public/videos/mold-evaluation/mold-hero.mp4"
  "public/videos/home/quick-response.mp4"
  "public/videos/home/expertise-and-experience.mp4"
  "public/videos/home/insurance-knowledge.mp4"
  "public/videos/home/safety-and-health.mp4"
  "public/videos/home/peace-of-mind.mp4"
)

# Create backup directory if it doesn't exist
BACKUP_DIR="public/videos/.originals"
mkdir -p "$BACKUP_DIR"

# Statistics
total_original=0
total_optimized=0
total_files=0

echo -e "${BLUE}Creating backups and optimizing videos...${NC}\n"

# Function to get file size in bytes
get_size() {
  stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null
}

# Function to format bytes to human readable
format_size() {
  local size=$1
  if [ $size -lt 1024 ]; then
    echo "${size}B"
  elif [ $size -lt 1048576 ]; then
    echo "$(echo "scale=1; $size/1024" | bc)KB"
  else
    echo "$(echo "scale=1; $size/1048576" | bc)MB"
  fi
}

# Optimize each video
for video in "${videos[@]}"; do
  if [ ! -f "$video" ]; then
    echo -e "${RED}File not found: $video${NC}"
    continue
  fi

  total_files=$((total_files + 1))
  filename=$(basename "$video")
  dirname=$(dirname "$video")
  backup_path="$BACKUP_DIR/$filename"
  temp_output="${video}.tmp.mp4"

  echo -e "${YELLOW}[$total_files/${#videos[@]}] Processing: $filename${NC}"

  # Get original size
  original_size=$(get_size "$video")
  original_size_human=$(format_size $original_size)
  total_original=$((total_original + original_size))

  echo "  Original size: $original_size_human"

  # Create backup
  if [ ! -f "$backup_path" ]; then
    cp "$video" "$backup_path"
    echo -e "  ${GREEN}✓ Backup created${NC}"
  else
    echo -e "  ${BLUE}ℹ Backup already exists${NC}"
  fi

  # Optimize video
  echo "  Optimizing with ffmpeg..."
  ffmpeg -i "$video" \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -y \
    "$temp_output" \
    -loglevel error -stats

  # Check if optimization succeeded
  if [ -f "$temp_output" ]; then
    optimized_size=$(get_size "$temp_output")
    optimized_size_human=$(format_size $optimized_size)
    total_optimized=$((total_optimized + optimized_size))

    # Calculate reduction
    reduction=$((100 - (optimized_size * 100 / original_size)))

    # Replace original with optimized
    mv "$temp_output" "$video"

    echo -e "  ${GREEN}✓ Optimized: $optimized_size_human (${reduction}% reduction)${NC}"
  else
    echo -e "  ${RED}✗ Optimization failed${NC}"
  fi

  echo ""
done

# Show total statistics
echo -e "${GREEN}=== Optimization Complete! ===${NC}\n"
echo "Files processed: $total_files"
echo "Original total size: $(format_size $total_original)"
echo "Optimized total size: $(format_size $total_optimized)"

if [ $total_original -gt 0 ]; then
  total_reduction=$((100 - (total_optimized * 100 / total_original)))
  echo -e "Total reduction: ${GREEN}${total_reduction}%${NC}"
  echo "Space saved: $(format_size $((total_original - total_optimized)))"
fi

echo -e "\n${BLUE}Backups stored in: $BACKUP_DIR${NC}"
echo -e "\nNext steps:"
echo "1. Test optimized videos locally"
echo "2. Run ./scripts/upload-to-cloudinary.sh to upload"
echo "3. Update src/constants/videos.ts with Cloudinary URLs"
