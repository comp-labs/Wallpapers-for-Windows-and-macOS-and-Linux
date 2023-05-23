import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
