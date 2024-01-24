import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "타입스크립트 테스트",
  description: "타입스크립트를 테스트 합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
