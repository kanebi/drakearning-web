import { Metadata } from "next";
import * as androidLogo from "../assets/images/android.png";
import * as appleLogo from "../assets/images/apple.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Drak Earning | Earn Money While You Read",
  description:
    "Earn money while you read! Drak Earning is a unique platform for Nigerians   that rewards you with up to 4 naira for every article you read.",
  keywords: "app download, windows app, mac app, cross platform, secure app",
  openGraph: {
    title: "Drak Earning | Earn Money While You Read",
    description:
      "Earn money while you read! Drak Earning is a unique platform for Nigerians that rewards you with up to 4 naira for every article you read.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "App preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drak Earning | Earn Money While You Read",
    description:
      "Earn money while you read! Drak Earning is a unique platform for Nigerians that rewards you with up to 4 naira for every article you read.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: "https://drakearning.com/download",
  },
};
export default function Home() {

  return (
 <main className="flex flex-col items-center text-center">
          {/* Responsive navigation */}

          {/* Logo section */}
          {/* <Logo/> */}

          {/* Hero section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Drak Welcomes You Chief!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Earn money while you read! Drak Earning is a unique platform for
            Nigerians that rewards you with up to 4 naira for every article you
            read.{" "}
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 ">
            <a
              className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              href="https://expo.dev/accounts/kanemanuel/projects/drakearning/builds/400326c6-8ad5-43ac-866d-e548b5967817"
            >
              <Image
                src={androidLogo}
                alt="Windows icon"
                width={24}
                height={24}
                className="dark:invert"
              />
              Download for Android
            </a>
            <div className=" relative">
            <a
              className="flex opacity-80 items-center justify-center gap-2 px-8 py-4 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
              href="#download-mac"
            >
              <Image
                src={appleLogo}
                alt="Apple icon"
                width={24}
                height={24}
                className="dark:invert"
              />
              Download for Apple

            </a>
            <small className=" absolute bottom-0 left-2 text-xs right-2">{"Coming soon!"}</small>
            </div>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Earn Money While You Read
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get rewarded with up to 4 naira for every article you read on
                our platform.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Unique Platform for Nigerians
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is specifically designed for Nigerians, providing a
                unique opportunity to earn money while staying informed.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Stay Informed and Get Rewarded
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay up-to-date with the latest news and articles, and get
                rewarded for your engagement.
              </p>
            </div>
          </div>
        </main>

      
  );
}
