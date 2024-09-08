import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Thanachot Phomthong - Full-Stack Developer',
  description: 'Personal website of Thanachot Phomthong, a Full-Stack Developer specializing in web development.',
  keywords: ['ธนโชติ', 'Thanachot', 'ธนโชติ พรมทอง', 'Full-Stack Developer'],
  generator: 'Next.js',
  applicationName: 'Thanachot Phomthong Portfolio',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Thanachot Phomthong' }],
  creator: 'Thanachot Phomthong',
  publisher: 'Thanachot Phomthong',
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
    title: 'Thanachot Phomthong - Full-Stack Developer',
    description: 'Portfolio of Thanachot Phomthong, showcasing expertise in Full-Stack Development.',
    images: ['/images/me.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Thanachot Phomthong",
            "jobTitle": "Full-Stack Developer",
            "description": "ธนโชติ พรมทอง, Thanachot Phomthong, Full-Stack Developer"
          }
        `}
    </script>

    </html>
  );
}
