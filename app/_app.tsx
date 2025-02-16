"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head"; // Import Head for meta and preload
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/1.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/2.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/3.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/4.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/5.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/6.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/7.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/8.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/9.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://firebasestorage.googleapis.com/v0/b/your-bucket-name/o/10.jpg"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
