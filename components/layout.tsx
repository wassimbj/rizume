import Head from "next/head";
// import Image from 'next/image'
// import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta property="og:image" content={``} />
        <meta name="og:title" content="rizume" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="text-white text-opacity-60 whitespace-pre-wrap">
        {children}
        {/* <div
          className="absolute top-0 left-0 w-full h-full"
          id="main-bg"
        ></div> */}
      </main>
    </div>
  );
}
