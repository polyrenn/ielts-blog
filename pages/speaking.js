import { indexQuery } from '../lib/queries'
import { getClient, overlayDrafts, sanityClient } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import Navigation from '../components/navigation'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Layout from '../components/layout'
import { createClient } from '@sanity/client'
import cn from 'classnames'
import { PortableText } from '@portabletext/react'
import React, { useRef, useEffect, useState } from 'react';


const LandingPreview = lazy(() => import('../components/landing-preview'))
const client = createClient({
    projectId: 'tkgl8qwr',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})
  

export default function SpeakingPage({ speakingPost, toc, preview }) {


  const [isContentToggled, setIsContentToggled] = useState(false)

  
  const handleLinkClick = () => {
    setIsContentToggled(!isContentToggled)
  }

  const tocA = 'bg-slate-300 md:col-span-1 md:rounded-2xl md:p-6 md:sticky md:h-max md:top-4'
  const tocB = 'fixed bottom-0 left-0 right-0 justify-center px-8 pt-8 h-2/3 bg-white z-50 rounded-t-xl rounded-r-xl overflow-auto'

  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const targetElementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      // Function to check element visibility on scroll
      const checkElementVisibility = () => {
        if (targetElementRef.current) {
          setIsInView(isElementInView(targetElementRef.current));
        }
      };
  
      // Initial check on component mount
      checkElementVisibility();
  
      // Add scroll event listener to check visibility on scroll
      window.addEventListener('scroll', checkElementVisibility);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('scroll', checkElementVisibility);
      };
    }, []);

    console.log(isInView ? 'Yes' : 'No')
  
    
  const components = {
    block: {
      h4: ({children}) => <h4 id={children[0]} className='text-2xl mb-2'>{children}</h4>
    },

    marks: {
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>
    }

}

const componentsToc = {
  block: ({children}) => <Link onClick={handleLinkClick} scroll={false} href={`#${children[0]}`}><h4 className='text-2xl mb-2'>{children}</h4></Link>
}


  return (
    <>
    <Layout>
        <Head>
            <title>Speaking - Module</title>
        </Head>
        <Navigation></Navigation>
            <main className='mt-4'>
              <div className={`${isContentToggled ? 'flex': 'hidden'} overlay w-full h-screen fixed top-0 bg-black opacity-25 z-40`}>

              </div>
              <Container>  
                <section className='mb-2'>
                    <div className='module-pill bg-teal-100 text-teal-600 p-1 px-4 w-max rounded-full'>
                        <p>Guides</p>
                    </div>
                    <h4 className='text-2xl md:text-5xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                        The Speaking Guide
                    </h4>
                    <p>Ielts Essentials - Speaking</p>
                </section>
               </Container> 

               <section className={cn('border-t border-accent-2', {
                        'border-accent-7 text-white': preview,
                        'border-accent-2': !preview,
                })}>

                </section>


               <Container>        
               <section className='flex flex-col mt-4 md:grid md:grid-cols-3 md:gap-4 md:relative'>
                <div className={`${isContentToggled ? tocB : tocA} toc`}>
                  <div className='flex flex-row justify-between items-center toc-heading mb-8'>
                    <h4 className='text-base font-semibold'>CONTENTS</h4>
                   
                        <svg onClick={() => setIsContentToggled(!isContentToggled)} className={`w-6 h-6 ${isInView ? 'hidden' : 'block'}`} id="Filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>182 circle cross</title><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4,14.587A1,1,0,1,1,14.587,16L12,13.414,9.414,16A1,1,0,0,1,8,14.586L10.586,12,8,9.414A1,1,0,0,1,9.414,8L12,10.586,14.587,8A1,1,0,1,1,16,9.413L13.414,12Z"/></svg>  
                  </div>
                  <div ref={targetElementRef}>This is the target element</div>
                    <PortableText
                        value={toc.headings}
                        components={componentsToc}
                    ></PortableText>
                </div>

                <div className='content prose-lg md:col-span-2'>
                    Content
                    <PortableText
                      value={speakingPost.content} // Portable Text Takes the Array of Raw Html And Renders That Plain without customizations
                      components={components}
                  />
                </div>
               
               </section> 
               
                <div className={`${isInView ? 'hidden' : ' flex'} toc-pill fixed bottom-8 left-0 right-0 justify-center transition-opacity`}>
                  <button
                    onClick={() => setIsContentToggled(true) }
                    className='flex flex-row justify-between items-center rounded-md w-1/2 h-14 px-8 bg-white border border-accent-2 shadow-xl'>
                     <p>Contents</p>
                     <svg className='w-6 h-6' id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>05 list</title><path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"/><path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><circle cx="2" cy="5" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="2" cy="19" r="2"/></svg>
                  </button>
               </div>

               </Container>
              <Container>
                
              </Container>
               
            </main>
    </Layout>    
    </>
  )

}  



export async function getStaticProps() {

  const query = `*[_type=="post" && slug.current == "speaking"]{
    content
  }[0]`;  
  const speakingPost = await sanityClient.fetch(query)

  const tableOfContent = `*[ _type == "post" && slug.current == "speaking" ] {
        "headings": content[string::startsWith(style, "h")]
    }[0]`

  const toc = await sanityClient.fetch(tableOfContent)

  return {
    props: { speakingPost, toc },
  }
}

