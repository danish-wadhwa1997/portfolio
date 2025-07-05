import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danish Wadhwa - Senior Frontend Developer",
  description: "Results-driven Senior Frontend Developer in Bengaluru, India. 6+ years experience in React, Redux, Next.js, and UI/UX. View my projects, experience, and contact info.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio", "Bengaluru", "Danish Wadhwa"],
  authors: [{ name: "Danish Wadhwa" }],
  creator: "Danish Wadhwa",
  openGraph: {
    title: "Danish Wadhwa - Senior Frontend Developer",
    description: "Results-driven Senior Frontend Developer in Bengaluru, India. 6+ years experience in React, Redux, Next.js, and UI/UX.",
    type: "website",
    locale: "en_US",
    url: "https://danishwadhwa.dev",
    siteName: "Danish Wadhwa Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 600,
        height: 600,
        alt: "Danish Wadhwa Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Wadhwa - Senior Frontend Developer",
    description: "Results-driven Senior Frontend Developer in Bengaluru, India. 6+ years experience in React, Redux, Next.js, and UI/UX.",
    images: ["/avatar.jpg"],
    creator: "@danishwadhwa",
  },
  metadataBase: new URL("https://danishwadhwa.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://danishwadhwa.dev" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Danish Wadhwa",
              "url": "https://danishwadhwa.dev",
              "image": "https://danishwadhwa.dev/avatar.jpg",
              "jobTitle": "Senior Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "InRhythm",
              },
              "sameAs": [
                "https://www.linkedin.com/in/danish-wadhwa-677588153/",
                "https://github.com/danishwadhwa",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "India",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
