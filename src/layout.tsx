import './globals.css'
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Wallpapers | Tech Fiddle',
  description: 'Wallpapers by Tech Fiddle for everyone!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  )
}
