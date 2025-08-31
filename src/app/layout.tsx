// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseGlowScript from './components/MouseGlowScript';
import Header from "./components/Header";
import { AuthProvider } from './lib/auth-context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mmmaske",
  description: "Professional developer and digital tinkerer",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="layout-container">
            <Header />
            <div className="main-container">
              {children}
            </div>
          </div>
        </AuthProvider>
        <MouseGlowScript />
      </body>
    </html>
  );
}