import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        <Image src="/images/dft-logo.png" width={144} height={122} />
        Bem vindo ao DFT
      </h1>

      <Link href="/tipificacao">
        <a>Tipificação</a>
      </Link>
    </div>
  )
}
