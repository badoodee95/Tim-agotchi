'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Expiration from './components/expiration';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Expiration />;
        <Header />
        {children}
      </body>
    </html>
  );
}
