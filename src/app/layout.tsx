import '#@/styles/css/globals.css';
import Navbar from '#@/components/navbar';
import layout from '#@/styles/css/layout.module.css';
import type { Metadata } from 'next';
import 'material-symbols';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'R&S Asesoría Jurídica',
  description: 'Generated by create next app',
  generator: 'R&S Asesoría Jurídica',
  applicationName: 'R&S Asesoría Jurídica',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js', 'React', 'JavaScript'
  ],
  authors: [
    { name: 'cam' },
    {
      name: 'Cachorro Cami',
      url: 'https://camilo.suarez-ramirez.com',
    },
  ],
  colorScheme: 'light dark',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#a700b0',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#ff4e3f',
    },
  ],
  creator: 'Cachorro Cami',
  manifest:
        'https://app.rsasesorjuridico.com/manifest.json',
  publisher: 'CachorroC',
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'R&S Asesoría Jurídica',
    description: 'The React Framework for the Web',
    url: 'https://app.rsasesorjuridico.com',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://app.rsasesorjuridico.com/splash_screens/12.9__iPad_Pro_portrait.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://app.rsasesorjuridico.com/splash_screens/8.3__iPad_Mini_landscape.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'es-CO',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icons/favicon.png' },
      new URL(
        '/favicon.svg',
        'https://app.rsasesorjuridico.com',
      ),
    ],
    shortcut: '/safari-pinned-tab.svg',
    apple: '/icons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon-precomposed.png',
    },
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/icons/mstile-310x310.png',
      {
        url: '/icons/android-chrome-512x512.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  appLinks: {
    web: {
      url: 'https://app.rsasesorjuridico.com',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="[color-scheme: light dark]">
      <body>
        <div className={layout.base}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
