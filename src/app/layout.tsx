'use client';

import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/ui/navbarTailwind';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import 'semantic-ui-css/semantic.min.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

useEffect(()=>{
  setMounted(true)
}, [])
if(!mounted){
  return null
}
  return (
    <html lang="en"suppressHydrationWarning>
      <body className='bg-background'>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
