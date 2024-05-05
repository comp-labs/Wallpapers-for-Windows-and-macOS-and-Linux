import { useEffect, useState } from 'react';

export default function WallpaperShowcase() {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch('/api/wallpapers')
      .then((response) => response.json())
      .then((data) => setWallpapers(data.wallpapers))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {wallpapers.map((wallpaper, index) => (
        <img
          key={index}
          src={`/wallpapers/${wallpaper}`}
          alt={`Wallpaper ${index + 1}`}
          className="rounded-xl"
        />
      ))}
    </div>
  );
}
