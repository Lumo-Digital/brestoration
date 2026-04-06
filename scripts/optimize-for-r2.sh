#!/bin/bash

# Optimize videos from .originals/ and output to proper subfolder structure
# Output will be ready to upload to Cloudflare R2

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ORIGINALS_DIR="$ROOT_DIR/public/videos/.originals"

echo -e "${GREEN}=== Optimize Videos for R2 ===${NC}\n"

if ! command -v ffmpeg &> /dev/null; then
  echo -e "${RED}Error: ffmpeg is not installed. Run: brew install ffmpeg${NC}"
  exit 1
fi

# Format: "original_filename|output_subpath"
MAPPINGS=(
  "home-hero.mp4|home/home-hero.mp4"
  "quick-response.mp4|home/quick-response.mp4"
  "expertise-and-experience.mp4|home/expertise-and-experience.mp4"
  "insurance-knowledge.mp4|home/insurance-knowledge.mp4"
  "safety-and-health.mp4|home/safety-and-health.mp4"
  "peace-of-mind.mp4|home/peace-of-mind.mp4"
  "water-hero.mp4|water-damage/water-hero.mp4"
  "fire-hero.mp4|fire-damage/fire-hero.mp4"
  "storm-hero.mp4|storm-damage/storm-hero.mp4"
  "mold-hero.mp4|mold-evaluation/mold-hero.mp4"
  "roof-hero.mp4|roof-evaluation/roof-hero.mp4"
)

total=${#MAPPINGS[@]}
success=0
total_original_bytes=0
total_optimized_bytes=0
index=0

get_size() { stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null; }
format_mb() { awk "BEGIN {printf \"%.1f\", $1/1048576}"; }

for mapping in "${MAPPINGS[@]}"; do
  index=$((index + 1))
  filename="${mapping%%|*}"
  output_rel="${mapping##*|}"
  input="$ORIGINALS_DIR/$filename"
  output="$ROOT_DIR/public/videos/$output_rel"
  output_dir="$(dirname "$output")"

  if [ ! -f "$input" ]; then
    echo -e "${RED}[$index/$total] ✗ Not found: $filename${NC}"
    continue
  fi

  mkdir -p "$output_dir"

  original_size=$(get_size "$input")
  total_original_bytes=$((total_original_bytes + original_size))

  echo -e "${YELLOW}[$index/$total] $filename → videos/$output_rel${NC}"
  echo "    Input:  $(format_mb $original_size) MB"

  ffmpeg -i "$input" \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -an \
    -movflags +faststart \
    -y \
    "$output" \
    -loglevel error -stats

  if [ -f "$output" ]; then
    optimized_size=$(get_size "$output")
    total_optimized_bytes=$((total_optimized_bytes + optimized_size))
    reduction=$((100 - (optimized_size * 100 / original_size)))
    echo -e "    Output: $(format_mb $optimized_size) MB ${GREEN}(${reduction}% smaller)${NC}"
    success=$((success + 1))
  else
    echo -e "    ${RED}✗ ffmpeg failed${NC}"
  fi
  echo ""
done

echo -e "${GREEN}=== Done ===${NC}"
echo "Processed: $success/$total videos"
if [ $total_original_bytes -gt 0 ]; then
  total_reduction=$((100 - (total_optimized_bytes * 100 / total_original_bytes)))
  echo "Total before: $(format_mb $total_original_bytes) MB"
  echo "Total after:  $(format_mb $total_optimized_bytes) MB"
  echo -e "Saved: ${GREEN}${total_reduction}%${NC}"
fi
echo ""
echo -e "${BLUE}Next: upload public/videos/ to Cloudflare R2 bucket brestorations-media${NC}"
