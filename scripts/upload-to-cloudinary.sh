#!/bin/bash

# Upload videos to Cloudinary
# Usage: ./scripts/upload-to-cloudinary.sh

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Cloudinary Video Upload Script ===${NC}\n"

# Load environment variables from .env file if it exists
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | grep CLOUDINARY_URL | xargs)
fi

# Check if CLOUDINARY_URL is set
if [ -z "$CLOUDINARY_URL" ]; then
  echo -e "${RED}Error: CLOUDINARY_URL environment variable not set${NC}"
  echo "Please set your Cloudinary credentials:"
  echo "  export CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME"
  echo "Or add CLOUDINARY_URL to your .env file"
  exit 1
fi

# Extract credentials from CLOUDINARY_URL
# Format: cloudinary://API_KEY:API_SECRET@CLOUD_NAME
CLOUD_NAME=$(echo $CLOUDINARY_URL | sed 's/.*@\(.*\)/\1/')
CLOUDINARY_API_KEY=$(echo $CLOUDINARY_URL | sed 's/cloudinary:\/\/\([^:]*\):.*/\1/')
CLOUDINARY_API_SECRET=$(echo $CLOUDINARY_URL | sed 's/cloudinary:\/\/[^:]*:\([^@]*\)@.*/\1/')

echo -e "Cloud name: ${GREEN}$CLOUD_NAME${NC}\n"

# Function to upload a video
upload_video() {
  local file="$1"
  local public_id="$2"

  if [ ! -f "$file" ]; then
    echo -e "${RED}File not found: $file${NC}"
    return 1
  fi

  local size=$(du -h "$file" | cut -f1)
  echo -e "${YELLOW}Uploading: $(basename "$file") ($size)${NC}"
  echo "  Public ID: $public_id"

  # Generate timestamp for signature
  local timestamp=$(date +%s)

  # Upload with curl (signed upload)
  response=$(curl -s -X POST "https://api.cloudinary.com/v1_1/$CLOUD_NAME/video/upload" \
    -F "file=@$file" \
    -F "public_id=$public_id" \
    -F "api_key=$CLOUDINARY_API_KEY" \
    -F "timestamp=$timestamp" \
    -F "overwrite=true" \
    -F "invalidate=true" \
    -F "signature=$(echo -n "invalidate=true&overwrite=true&public_id=$public_id&timestamp=$timestamp$CLOUDINARY_API_SECRET" | openssl dgst -sha1 | sed 's/^.* //')")

  # Check if upload was successful
  if echo "$response" | grep -q "secure_url"; then
    local url=$(echo "$response" | grep -o '"secure_url":"[^"]*"' | cut -d'"' -f4)
    echo -e "  ${GREEN}✓ Uploaded successfully${NC}"
    echo "  URL: $url"
    echo ""
  else
    echo -e "  ${RED}✗ Upload failed${NC}"
    echo "$response"
    echo ""
  fi
}

# Upload all videos
total=10
current=0

echo -e "${GREEN}[1/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/home-hero.mp4" "blue-restoration/videos/home/home-hero"

echo -e "${GREEN}[2/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/water-damage/water-hero.mp4" "blue-restoration/videos/water-damage/water-hero"

echo -e "${GREEN}[3/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/fire-damage/fire-hero.mp4" "blue-restoration/videos/fire-damage/fire-hero"

echo -e "${GREEN}[4/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/storm-damage/storm-hero.mp4" "blue-restoration/videos/storm-damage/storm-hero"

echo -e "${GREEN}[5/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/mold-evaluation/mold-hero.mp4" "blue-restoration/videos/mold-evaluation/mold-hero"

echo -e "${GREEN}[6/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/quick-response.mp4" "blue-restoration/videos/home/quick-response"

echo -e "${GREEN}[7/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/expertise-and-experience.mp4" "blue-restoration/videos/home/expertise-and-experience"

echo -e "${GREEN}[8/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/insurance-knowledge.mp4" "blue-restoration/videos/home/insurance-knowledge"

echo -e "${GREEN}[9/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/safety-and-health.mp4" "blue-restoration/videos/home/safety-and-health"

echo -e "${GREEN}[10/$total]${NC}"
current=$((current + 1))
upload_video "public/videos/home/peace-of-mind.mp4" "blue-restoration/videos/home/peace-of-mind"

echo -e "${GREEN}=== Upload Complete! ===${NC}\n"
echo "Next steps:"
echo "1. Update src/constants/videos.ts with Cloudinary URLs"
echo "2. Add q_auto,f_auto transformations for optimization"
echo "3. Test the videos on localhost"
echo "4. Commit and push changes"
