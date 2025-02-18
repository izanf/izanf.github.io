import Head from "next/head";

import { About, Blog, Projects, Experience } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>izanf.dev</title>
        <meta name="description" content="Software developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <About />
        <Blog />
        <Projects />
        <Experience />
      </main>
      <footer>
        futer
      </footer>
    </>
  );
}
