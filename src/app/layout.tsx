import type { Metadata } from 'next';
import { I18nProvider } from '@/context/I18nContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Valuation & Consultants | ประเมินอสังหาริมทรัพย์ ประเมินที่ดิน',
  description:
    'บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด ผู้นำการประเมินมูลค่าทรัพย์สิน อสังหาริมทรัพย์ ที่ดิน เครื่องจักร และธุรกิจ กว่า 30 ปี',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}