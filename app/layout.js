import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Boorvaja | Designer & AI/ML Creator',
  description: 'Advanced personal portfolio for Boorvaja, designer and AI/ML creator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space.variable} min-h-screen bg-[#05070f] text-slate-100`}>{children}</body>
    </html>
  );
}
