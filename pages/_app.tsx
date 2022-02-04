import { AppProps } from 'next/app'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <style jsx global>{``}</style> */}
      <Component {...pageProps} />
    </>
  )
}

