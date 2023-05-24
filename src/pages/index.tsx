import WallpaperShowcase from '@src/components/WallpaperShowcase';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 p-4 text-center">Wallpaper Showcase</h1>
      <h2 className="text-2xl font-bold mb-4 p-4 text-center">By <a href="https://techfiddle.io" className="text-blue-600">Tech Fiddle</a></h2>
      <WallpaperShowcase />
    </>
  );
}