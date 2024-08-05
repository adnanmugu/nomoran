import React from 'react';
// const inter = Inter({ subsets: ['latin'] });
import 'app/globals.css';
import Header from 'app/_layouts/header';

export const metadata = {
  title: 'Nomoran',
  description: 'Generate increment number',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="foot">
          <span>Project by adnanmugu@2024</span>
          <a href="">docs</a>
        </footer>
      </body>
    </html>
  );
}
