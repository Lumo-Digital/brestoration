#!/bin/bash

# Convert poster images to WebP format
# Usage: ./scripts/convert-images-to-webp.sh

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}=== Image to WebP Conversion Script ===${NC}\n"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
  echo -e "${RED}Error: cwebp is not installed${NC}"
  echo "Install with: brew install webp"
  exit 1
fi

# Directory containing images
IMAGE_DIR="public/images/posters"

# Create backup directory
BACKUP_DIR="$IMAGE_DIR/.originals"
mkdir -p "$BACKUP_DIR"

# Statistics
total_original=0
total_converted=0
total_files=0

echo -e "${BLUE}Converting images to WebP...${NC}\n"

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

# Convert PNG files
for img in "$IMAGE_DIR"/*.png; do
  if [ -f "$img" ]; then
    total_files=$((total_files + 1))
    filename=$(basename "$img" .png)
    backup_path="$BACKUP_DIR/$(basename "$img")"
    output_path="$IMAGE_DIR/${filename}.webp"

    echo -e "${YELLOW}[$total_files] Processing: $(basename "$img")${NC}"

    # Get original size
    original_size=$(get_size "$img")
    original_size_human=$(format_size $original_size)
    total_original=$((total_original + original_size))

    echo "  Original size: $original_size_human"

    # Create backup if it doesn't exist
    if [ ! -f "$backup_path" ]; then
      cp "$img" "$backup_path"
      echo -e "  ${GREEN}✓ Backup created${NC}"
    else
      echo -e "  ${BLUE}ℹ Backup already exists${NC}"
    fi

    # Convert to WebP with quality 85
    echo "  Converting to WebP..."
    cwebp -q 85 "$img" -o "$output_path" 2>&1 | grep -v "^Saving"

    # Get converted size
    if [ -f "$output_path" ]; then
      converted_size=$(get_size "$output_path")
      converted_size_human=$(format_size $converted_size)
      total_converted=$((total_converted + converted_size))

      # Calculate reduction
      reduction=$((100 - (converted_size * 100 / original_size)))

      echo -e "  ${GREEN}✓ Converted: $converted_size_human (${reduction}% reduction)${NC}"

      # Remove original PNG
      rm "$img"
      echo -e "  ${GREEN}✓ Original PNG removed${NC}"
    else
      echo -e "  ${RED}✗ Conversion failed${NC}"
    fi

    echo ""
  fi
done

# Convert JPG files
for img in "$IMAGE_DIR"/*.jpg; do
  if [ -f "$img" ]; then
    total_files=$((total_files + 1))
    filename=$(basename "$img" .jpg)
    backup_path="$BACKUP_DIR/$(basename "$img")"
    output_path="$IMAGE_DIR/${filename}.webp"

    echo -e "${YELLOW}[$total_files] Processing: $(basename "$img")${NC}"

    # Get original size
    original_size=$(get_size "$img")
    original_size_human=$(format_size $original_size)
    total_original=$((total_original + original_size))

    echo "  Original size: $original_size_human"

    # Create backup if it doesn't exist
    if [ ! -f "$backup_path" ]; then
      cp "$img" "$backup_path"
      echo -e "  ${GREEN}✓ Backup created${NC}"
    else
      echo -e "  ${BLUE}ℹ Backup already exists${NC}"
    fi

    # Convert to WebP with quality 85
    echo "  Converting to WebP..."
    cwebp -q 85 "$img" -o "$output_path" 2>&1 | grep -v "^Saving"

    # Get converted size
    if [ -f "$output_path" ]; then
      converted_size=$(get_size "$output_path")
      converted_size_human=$(format_size $converted_size)
      total_converted=$((total_converted + converted_size))

      # Calculate reduction
      reduction=$((100 - (converted_size * 100 / original_size)))

      echo -e "  ${GREEN}✓ Converted: $converted_size_human (${reduction}% reduction)${NC}"

      # Remove original JPG
      rm "$img"
      echo -e "  ${GREEN}✓ Original JPG removed${NC}"
    else
      echo -e "  ${RED}✗ Conversion failed${NC}"
    fi

    echo ""
  fi
done

# Show total statistics
echo -e "${GREEN}=== Conversion Complete! ===${NC}\n"
echo "Files processed: $total_files"
echo "Original total size: $(format_size $total_original)"
echo "Converted total size: $(format_size $total_converted)"

if [ $total_original -gt 0 ]; then
  total_reduction=$((100 - (total_converted * 100 / total_original)))
  echo -e "Total reduction: ${GREEN}${total_reduction}%${NC}"
  echo "Space saved: $(format_size $((total_original - total_converted)))"
fi

echo -e "\n${BLUE}Backups stored in: $BACKUP_DIR${NC}"
echo -e "\nNext steps:"
echo "1. Update image references from .png/.jpg to .webp"
echo "2. Test images locally"
echo "3. Commit changes"
