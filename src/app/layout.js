import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tim-agotchi',
  description: 'Raise your own Tim!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <Header />
        <div style={{ marginTop: '50px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
