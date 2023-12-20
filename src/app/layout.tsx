import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Explorer from './ui/explorer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'fmd | Flyweight markdown editor',
  description: 'A minimalistic yet battery included markdown editor.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 ${inter.className}`}
      >
        <div className="flex min-h-screen">
          <Explorer />
          <main className="mx-auto max-w-7xl flex-1 px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
