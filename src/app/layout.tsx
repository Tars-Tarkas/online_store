import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/Container/Container";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
