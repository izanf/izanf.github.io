import { Html, Head, Main, NextScript } from "next/document";

import { Navbar } from "@/components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
