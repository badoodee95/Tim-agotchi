'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Tim-agotchi',
//   description: 'Raise your own Tim!',
// };

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const showHeader = pathname === '/users/signup' || pathname === '/users/login' ? false : true;

  return (
    <html lang="en">
      <body className={inter.className}>
        {showHeader && <Header />}
        {/* <div style={{ marginTop: '50px' }}> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
