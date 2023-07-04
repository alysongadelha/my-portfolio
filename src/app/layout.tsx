import './globals.css';
import { Aldrich, Orbitron, Rajdhani } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-rajdhani',
});
const aldrich = Aldrich({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aldrich',
});

export const metadata = {
  title: 'DrLysn',
  description: 'A portfolio of Alyson Gadelha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${aldrich.variable} ${rajdhani.variable} ${orbitron.variable} bg-gray-900 bg-siteStar bg-repeat text-white`}
      >
        {children}
      </body>
    </html>
  );
}
