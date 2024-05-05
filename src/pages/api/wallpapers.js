import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const wallpapersDirectory = path.join(process.cwd(), 'public', 'wallpapers');
  const wallpaperFilenames = fetchWallpaperFilenames(wallpapersDirectory);

  res.status(200).json({ wallpapers: wallpaperFilenames });
}

function fetchWallpaperFilenames(directory) {
  const wallpaperFiles = fs.readdirSync(directory);

  const wallpaperFilenames = wallpaperFiles.map((filename) => {
    return path.basename(filename);
  });

  return wallpaperFilenames;
}