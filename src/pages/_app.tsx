import type { AppProps } from 'next/app'
import localFont from "next/font/local";
import "../globals.css";
import { Logo } from "@/components/logo/logo";
import { useState } from "react";
import Link from 'next/link';
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",  // Update path relative to _app.tsx
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",  // Update path relative to _app.tsx
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <nav className="flex justify-between items-center w-full px-4 py-4 bg-transparent">
      <div className="flex justify-between items-center">
        <Logo />
      </div>
      <div className="hidden md:flex  align-middle space-x-4 content-center place-content-center justify-center items-center">
      <Link href="/">
        <a className="text-sm font-medium block  ">
            Home
          </a>
      </Link>
      <Link href="/terms">
        <a className="text-sm font-medium block">
            Terms
          </a>
      </Link>
      <Link href="/policy">
        <a className="text-sm font-medium block">
            Policy
          </a>
      </Link>
      <Link href="/faqs">
        <a className="text-sm font-medium block">
            Faqs
          </a>
      </Link>
      <Link href="/contact">
        <a className="text-sm font-medium block">
            Contact US
          </a>
      </Link>
      <Link href="/about">
        <a className="text-sm font-medium block ">
            About
          </a>
      </Link>
        
      </div>
      <div className="md:hidden">
        <button
          className="text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed rounded-md z-50 backdrop-blur-md bg-opacity-35 left-0 top-24 w-full bg-white dark:bg-gray-800 shadow-sm p-4">
          <Link href="/">
            <a className="text-sm font-medium block my-3 p-4 hover:bg-neutral-500">
            Home
          </a>
          </Link>
          <Link href="/terms">
            <a className="text-sm font-medium block my-3 p-4 hover:bg-neutral-500">
            Terms
          </a>
          </Link>
          <Link href="/policy">
            <a className="text-sm font-medium block my-3 p-4 hover:bg-neutral-500">
            Policy
          </a>
          </Link>
          <Link href="/faqs">
            <a className="text-sm font-medium block my-3 p-4 hover:bg-neutral-500">
            Faqs
          </a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium block my-3 p-4 hover:bg-neutral-500">
            Contact US
          </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium block mb-2 my-3 p-4 hover:bg-neutral-500">
            About
          </a>
          </Link>
        </div>
      )}
    </nav>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Component {...pageProps} />
    </main>
      {/* Footer with version info */}
      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>Latest version: v1.0.0</p>
      <p className="mt-2">
        Need help?{" "}
        <a
          href="mailto:support@drakearning.com"
          className="text-red-600 hover:underline"
        >
          Contact support
        </a>
      </p>
    </footer>
  </div>
</div>
  );
} 