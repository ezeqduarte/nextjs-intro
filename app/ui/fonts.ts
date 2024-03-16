import { Inter, Lusitana } from 'next/font/google';
 
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({ subsets: ['latin'], weight: '700', style: 'normal' });

export const fonts = { inter , lusitana }