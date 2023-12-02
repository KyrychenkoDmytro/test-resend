import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Усвідомлене управління',
  description: 'Розвиток управлінської компетенсії',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
