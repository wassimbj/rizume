import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children, }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={``}
        />
        <meta name="og:title" content="rizume" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="bg-gray-900 text-gray-400 whitespace-pre-wrap">{children}</main>
    </div>
  )
}
