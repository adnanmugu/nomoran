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
        <nav>this nav</nav>
        {children}
      </body>
    </html>
  );
}
