import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "دليل التحويل عبر إنستاباي | شركة الوسام",
  description:
    "شرح مصوّر خطوة بخطوة لعملاء شركة الوسام عن كيفية التحويل عبر تطبيق إنستاباي إلى حساباتنا البنكية أو فودافون كاش.",
  applicationName: "دليل إنستاباي — الوسام",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2a0a4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
