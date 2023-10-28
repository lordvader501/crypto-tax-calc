import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Tax Calculator",
  description: "“Free Crypto Tax Calculator for Australia -by Shauryam Dubey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames("bg-[#EFF2F5]", inter.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
