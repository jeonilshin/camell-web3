import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1><a href="/">WEB</a></h1>

        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>

        <ol>
          {children}
          <ul>
            <li><a href="/create/">Create</a></li>
            <li><a href="/update/1">Update</a></li>
            <li><input type="button" value="delete" /></li>
          </ul>
        </ol>


      </body>
    </html>
  );
}
