import './globals.scss';

export const metadata = {
  title: 'Thread Affair',
  description: 'A high quality suit brand',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
