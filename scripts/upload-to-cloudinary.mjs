#!/usr/bin/env node

/**
 * Upload processed videos to Cloudinary
 * This script uploads the videos from public/videos/processed/ to Cloudinary
 * with better quality settings and proper public IDs
 */

import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, '..', '.env') });

// Configure Cloudinary
if (!process.env.CLOUDINARY_URL) {
  console.error('❌ Error: CLOUDINARY_URL not found in .env file');
  process.exit(1);
}

// Parse and configure Cloudinary
// CLOUDINARY_URL format: cloudinary://api_key:api_secret@cloud_name
const cloudinaryUrl = process.env.CLOUDINARY_URL;
const urlMatch = cloudinaryUrl.match(/cloudinary:\/\/(.+):(.+)@(.+)/);
if (!urlMatch) {
  console.error('❌ Error: Invalid CLOUDINARY_URL format');
  process.exit(1);
}

cloudinary.config({
  cloud_name: urlMatch[3],
  api_key: urlMatch[1],
  api_secret: urlMatch[2]
});

// Video mapping: local filename -> Cloudinary public_id
const videoMappings = [
  {
    file: 'water-hero.mp4',
    publicId: 'blue-restoration/videos/water-damage/water-hero',
    displayName: 'Water Damage Hero'
  },
  {
    file: 'storm-hero.mp4',
    publicId: 'blue-restoration/videos/storm-damage/storm-hero',
    displayName: 'Storm Damage Hero'
  },
  {
    file: 'mold-hero.mp4',
    publicId: 'blue-restoration/videos/mold-evaluation/mold-hero',
    displayName: 'Mold Evaluation Hero'
  }
];

const uploadVideo = async (filePath, publicId, displayName) => {
  console.log(`\n📤 Uploading: ${displayName}`);
  console.log(`   File: ${filePath}`);
  console.log(`   Public ID: ${publicId}`);

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'video',
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      // Quality settings
      quality: 'auto:best',
      fetch_format: 'auto',
      // Video-specific settings
      transformation: [
        { quality: 'auto:best' }
      ]
    });

    console.log(`   ✅ Success!`);
    console.log(`   URL: ${result.secure_url}`);
    console.log(`   Size: ${(result.bytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Duration: ${result.duration}s`);
    console.log(`   Format: ${result.format}`);

    return result;
  } catch (error) {
    console.error(`   ❌ Failed to upload ${displayName}:`, error.message);
    throw error;
  }
};

const main = async () => {
  console.log('🚀 Starting Cloudinary upload process...\n');

  const processedDir = join(__dirname, '..', 'public', 'videos', 'processed');

  if (!existsSync(processedDir)) {
    console.error(`❌ Error: Processed videos directory not found: ${processedDir}`);
    process.exit(1);
  }

  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (const mapping of videoMappings) {
    const filePath = join(processedDir, mapping.file);

    if (!existsSync(filePath)) {
      console.warn(`⚠️  Warning: File not found: ${filePath}`);
      failCount++;
      continue;
    }

    try {
      const result = await uploadVideo(filePath, mapping.publicId, mapping.displayName);
      results.push({ ...mapping, result });
      successCount++;
    } catch (error) {
      failCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Upload Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successful uploads: ${successCount}`);
  console.log(`❌ Failed uploads: ${failCount}`);
  console.log(`📁 Total videos: ${videoMappings.length}`);

  if (results.length > 0) {
    console.log('\n📋 Updated URLs:');
    results.forEach(({ displayName, result }) => {
      console.log(`\n${displayName}:`);
      console.log(`  ${result.secure_url}`);
    });

    console.log('\n✨ Next steps:');
    console.log('1. The videos are now live on Cloudinary');
    console.log('2. Update src/constants/videos.ts if you changed the version number');
    console.log('3. Test the videos on your website');
    console.log('4. The old transformations (e_trim, ar_16:9, etc) can now be removed');
  }
};

main().catch((error) => {
  console.error('\n❌ Upload process failed:', error);
  process.exit(1);
});
