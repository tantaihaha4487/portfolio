import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Thanachot P.',
  description: "Thanachot Phomthong's Portfolio",
  icon: 'favicon.ico',
  openGraph: {
    title: 'Thanachot | Portfolio',
    images: '/images/me.jpg',
    description: "View Thanachot's Portfolio",
    authors: ['Thanachot'],
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
