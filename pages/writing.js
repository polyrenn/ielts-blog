import { indexQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import Landing from '../components/landing'
import Navigation from '../components/navigation'
import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { createClient } from '@sanity/client'
import cn from 'classnames'

const LandingPreview = lazy(() => import('../components/landing-preview'))
const client = createClient({
    projectId: 'tkgl8qwr',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

const tableOfContent = `*[ _type == "post" ] {
body,
    "headings": body[string::startsWith(style, "h")]
}`

client.fetch(tableOfContent).then((bikes) => {
    console.log('Bikes with more than one seat:')
    bikes.forEach((bike) => {
      console.log(bike)
    })
  })
  
  

export default function WritingPage({ allPosts, preview }) {
  return (
    <>
    <Layout>
        <Head>
            <title>Speaking - Module</title>
        </Head>
        <Navigation></Navigation>
    </Layout>    
    </>
  )

}  

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

