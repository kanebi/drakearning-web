import { Metadata } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Drak Earning | Earn Money While You Read',
  description: 'Earn money while you read! Drak Earning is a unique platform for Nigerians   that rewards you with up to 4 naira for every article you read.',
  keywords: 'app download, windows app, mac app, cross platform, secure app',
  openGraph: {  
    title: 'Drak Earning | Earn Money While You Read',
    description: 'Earn money while you read! Drak Earning is a unique platform for Nigerians that rewards you with up to 4 naira for every article you read.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'App preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drak Earning | Earn Money While You Read',
    description: 'Earn money while you read! Drak Earning is a unique platform for Nigerians that rewards you with up to 4 naira for every article you read.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://drakearning.com/download',
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="flex flex-col items-center text-center">
          {/* Logo section */}
          <Image
            className="dark:invert mb-8"
            src="/next.svg"
            alt="App logo"
            width={180}
            height={38}
            priority
          />
          
          {/* Hero section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Drak Welcomes You Aweigh!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Earn money while you read! Drak Earning is a unique platform for Nigerians 
          that rewards you with up to 4 naira for every article you read.          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 ">
            <a
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              href="https://expo.dev/accounts/kanemanuel/projects/drakearning/builds/400326c6-8ad5-43ac-866d-e548b5967817"
            >
              <Image
                src="/windows.svg"
                alt="Windows icon"
                width={24}
                height={24}
                className="dark:invert"
              />
              Download for Android
              
            </a>
            <a
              className="flex opacity-5 items-center justify-center gap-2 px-8 py-4 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
              href="#download-mac"
            >
              <Image
                src="/apple.svg"
                alt="Apple icon"
                width={24}
                height={24}
                className="dark:invert"
              />
              Download for Apple
            </a>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Fast & Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast downloads with enterprise-grade security.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Cross Platform</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Available on all your favorite devices and platforms.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Always Updated</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular updates with new features and improvements.
              </p>
            </div>
          </div>
        </main>

        {/* Footer with version info */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Latest version: v1.0.0</p>
          <p className="mt-2">
            Need help?{" "}
            <a href="mailto:support@drakearning.com" className="text-blue-600 hover:underline">
              Contact support
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}