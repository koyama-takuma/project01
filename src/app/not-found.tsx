import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>ページが見つからないよ</h1>
      <Link href="/">&gt; top</Link>
    </>
  )
}