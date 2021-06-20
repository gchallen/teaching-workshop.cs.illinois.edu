// organize-imports-ignore
import type { AppProps } from "next/app"
import Head from "next/head"
import "./reset.css"
import "./global.scss"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <link rel="mask-icon" href={`${basePath}/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
