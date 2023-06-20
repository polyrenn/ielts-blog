import Layout from './layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import Intro from './intro'
import HeroPost from './hero-post'
import MoreStories from './more-stories'
import Navigation from './navigation'
import Image from 'next/image';
import linkIcon from '../assets/arrow-link.svg'
import styles from './styles/Landing.module.css'


export default function Landing({ allPosts, preview }) {
  const [heroPost, ...morePosts] = allPosts || []

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
          <Navigation></Navigation>
        <Container>
          <Intro />
          <div className='sm:flex md:grid grid-cols-2 gap-4'>
            <div className='speaking row-span-2 col-span-1 bg-slate-100'>
                <div className='main-module'>
                    <div className='content'>
                        <h4 className='text-6xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Speaking 
                        </h4>
                        <p>
                        Learn five major principles of effective communication.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                      <button className='bg-slate-600 items-center flex-row-reverse flex p-2 text-white rounded'>
                      <Image
                        priority
                        src={linkIcon}
                      />
                        <span>View Module</span>
                      </button>
                    </div>
                </div>
                <div className='sub-module mt-8'>
                <div className='content'>
                        <h4 className='text-6xl md:text-xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Communication 
                        </h4>
                        <p>
                        Learn five major principles of effective communication.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                      <button className='bg-slate-600 items-center flex-row-reverse flex p-2 text-white'>
                      <Image
                        priority
                        src={linkIcon}
                      />
                        <span>View Module</span>
                      </button>
                    </div>
                </div>
            </div>

            <div className='speaking bg-slate-100'>
                <div className='main'>
                    <div className='content'>
                        <h4 className='text-6xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Speaking
                        </h4>
                        <p>
                        Learn five major principles of effective communication.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                      <button className='bg-slate-600 items-center flex-row-reverse flex p-2 text-white'>
                      <Image
                        priority
                        src={linkIcon}
                      />
                        <span>View Module</span>
                      </button>
                    </div>
                </div>
                <div className='submodule'>
                  
                </div>
            </div>

            <div className='sm:col-start-2  speaking col-start-3 bg-slate-100'>
                <div className='main'>
                    <div className='content'>
                        <h4 className='text-6xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Speaking
                        </h4>
                        <p>
                        Learn five major principles of effective communication.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                      <button className='bg-slate-600 items-center flex-row-reverse flex p-2 text-white'>
                      <Image
                        priority
                        src={linkIcon}
                      />
                        <span>View Module</span>
                      </button>
                    </div>
                </div>
                <div className='submodule'>
                  
                </div>
            </div>
          </div>

          
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
