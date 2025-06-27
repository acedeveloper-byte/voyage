import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React from 'react'

const SEO = ({ title , description }) => {
  const router = useRouter()
  return (
    <>
         <Head>
        <title>{title}</title>
        <meta name="canonical" content={`https://www.thevoyagetours.com${router.asPath}`} />

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default SEO


