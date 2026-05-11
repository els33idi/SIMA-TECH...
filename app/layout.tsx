import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'SIMA TECH | Ultra-Premium AI & Tech',
  description: 'Next-generation futuristic technology company.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable} dark antialiased`}>
      <body className="bg-[#020204] text-white selection:bg-[#8A2BE2] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
