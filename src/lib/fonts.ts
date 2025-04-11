import { Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Display font for headings (the large bold font for titles)
export const displayFont = localFont({
  src: [
    {
      path: '../../public/fonts/display-font.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-display',
});

// Body font family with multiple weights
export const bodyFont = localFont({
  src: [
    {
      path: '../../public/fonts/font-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/font-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/font-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-body',
});
