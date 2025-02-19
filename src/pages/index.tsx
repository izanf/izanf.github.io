import Head from "next/head";

import { About, Articles, Projects, Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>izanf.dev</title>
        <meta name="description" content="Software developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full">
        <Navbar />
        <main className="bg-gray-50 overflow-auto">
          <About />
          {/* <Articles /> */}
          <Projects />
          {/* <Experience /> */}
          <Footer />
        </main>
      </div>
    </>
  );
}
