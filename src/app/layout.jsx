import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Thanachot Phomthong | Personal Site',
  description: 'Personal website of Thanachot Phomthong.',
  keywords: ['ธนโชติ', 'Thanachot', 'ธนโชติ พรมทอง', 'tantaihaha', 'Full-Stack Developer'],
  generator: 'Next.js',
  applicationName: 'Thanachot Phomthong Personal Site',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Thanachot Phomthong' }, { name: 'TantaiHaha' }],
  creator: ['Thanachot Phomthong', 'TantaiHaha'],
  publisher: ['Thanachot Phomthong', 'TantaiHaha'],
  openGraph: {
    title: 'Thanachot Phomthong - Full-Stack Developer',
    description: 'Portfolio of Thanachot Phomthong, showcasing expertise in Full-Stack Development.',
    url: 'https://thanachot.xyz',
    siteName: 'Thanachot Phomthong Portfolio',
    images: [
      {
        url: '/images/me.jpg',
        width: 800,
        height: 600,
        alt: 'Thanachot Phomthong Profile',
      }
    ],
    locale: ['en_US', 'th_TH'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanachot Phomthong | Personal Site',
    description: 'Personal website of Thanachot Phomthong.',
    images: ['/images/me.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

        <Script type="application/ld+json" id="schema-jsonld">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thanachot Phomthong",
              "jobTitle": "Full-Stack Developer",
              "description": "ธนโชติ พรมทอง, Thanachot Phomthong, Full-Stack Developer"
            }
          `}
        </Script>

      </body>
    </html>
  );
}
