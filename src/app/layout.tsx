import type { Metadata } from "next";
import "./globals.css";
import { Fira_Sans } from 'next/font/google';


const fira = Fira_Sans({
  weight: '400',
  subsets: ['latin']  
});


export const metadata: Metadata = {
  title: "Olivas Challenge",
  description: "Teste Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fira.className} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
