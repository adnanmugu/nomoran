// const inter = Inter({ subsets: ['latin'] });
import 'src/app/globals.css';

export const metadata = {
  title: 'Nomoran',
  description: 'Generate increment number',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="header">
          <div className="header__logo">Logo</div>
          <div className="header__wrapper">
            <div className="header__link">
              <div className="header__link-icon">X</div>
              <a href="https://github.com/adnanmugu">github</a>
            </div>
            <div className="header__link">
              <div className="header__link-icon">X</div>
              <a href="https://github.com/adnanmugu">twitter</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
