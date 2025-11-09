import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KidLab - Experiments by Ingredients',
  description: 'Pick your ingredients, get fun kid-friendly experiments with explanations for adults.',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icons/icon-192.png' },
    { rel: 'apple-touch-icon', url: '/icons/icon-192.png' },
  ],
  themeColor: '#2a98ff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-black/5 dark:border-white/10">
          <div className="container-mobile flex items-center gap-3 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-brand-600 text-white grid place-items-center font-black">K</div>
              <div className="leading-tight">
                <div className="font-extrabold text-lg">KidLab</div>
                <div className="text-xs text-gray-500">Experiments by Ingredients</div>
              </div>
            </Link>
            <div className="ml-auto text-sm text-gray-500 hidden sm:block">Learn by doing ?</div>
          </div>
        </header>
        <main className="container-mobile py-4 pb-24">{children}</main>
        <footer className="fixed bottom-0 left-0 right-0 border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
          <div className="container-mobile py-3 text-center text-xs text-gray-500">
            ? {new Date().getFullYear()} KidLab ? Built for families and educators
          </div>
        </footer>
      </body>
    </html>
  );
}
