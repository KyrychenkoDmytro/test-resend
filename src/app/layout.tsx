import type { Metadata } from 'next';
import './globals.scss';
import { Toaster } from 'react-hot-toast';
import StoreProvider from './StoreProvider';

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
    <StoreProvider>
    <html lang="uk">
      <body>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: '',
              style: {
                padding: '16px 32px',
              },
            }}
          />
      </body>
    </html>
    </StoreProvider>
  )
}
