/* The shared App Router root loads this font for every route. */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next';
import './globals.css';
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#155a37' };
export const metadata: Metadata = { title: 'Webdev — Your workspace, in calm', description: 'Projects, people and progress in one calm workspace.' };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>; }
