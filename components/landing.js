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
import Link from 'next/link'


export default function Landing({ allPosts, preview }) {
  const [heroPost, ...morePosts] = allPosts || []

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Ielts Solution - Ielts Tips & Tricks`}</title>
        </Head>
          <Navigation></Navigation>
        <Container>
          <Intro />
          <div className='flex flex-col md:grid grid-cols-2 gap-4'>
            <div className='speaking flex flex-col justify-between py-10 px-6 row-span-2 col-span-1 bg-purple-200 text-purple-900'>
                <div className='main-module'>
                    <div className='content'>
                        <h4 className='text-3xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Speaking 
                        </h4>
                        <p>/ˈspiː.kɪŋ/</p>
                        <p>
                        It is the process of transmitting one’s thoughts, ideas, attitudes and feelings through the mouth and vocal cords with the intention of communicating with others.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                    <Link href="#" >
                        <button className='bg-white items-center flex-row-reverse flex p-2'>
                          <Image
                            priority
                            src={linkIcon}
                            alt='link-icon'
                          />
                            <span>View Module</span>
                          </button>
                    </Link>
                    </div>
                </div>
                <div className='sub-module mt-8'>
                <div className='content'>
                        <h4 className='text-3xl md:text-xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Communication 
                        </h4>
                        <p>/kəˌmjuː.nɪˈkeɪ.ʃən/</p>
                        <p>
                        This is the exchange of information between two or more individuals. The process of communication involves the transferring of thoughts, concepts, attitudes and emotions from one person to another.

                        </p>
                    </div>
                    <div className='cta pt-6'>
                      <button className='bg-purple-300 items-center flex-row-reverse flex p-2'>
                      <Image
                        priority
                        src={linkIcon}
                        alt='link-icon'
                      />
                        <span>View Module</span>
                      </button>
                    </div>
                </div>
            </div>

            <div className='reading py-10 px-6 bg-emerald-200 text-emerald-900 md:mb-0'>
                <div className='main'>
                    <div className='content'>
                        <h4 className='text-3xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Reading
                        </h4>
                        <p>/ˈriː.dɪŋ/</p>
                        <p>
                        The Reading skill can be described as the ability to accurately extract information from a text based on its context. 

                        </p>
                    </div>
                    <div className='cta pt-6'>
                    <Link href="/reading" >
                        <button className='bg-white items-center flex-row-reverse flex p-2'>
                          <Image
                            priority
                            src={linkIcon}
                            alt='link-icon'
                          />
                            <span>View Module</span>
                          </button>
                    </Link>
                    </div>
                </div>
                <div className='submodule'>
                  
                </div>
            </div>

            <div className='col-start-2 py-10 px-6 writing bg-amber-200 text-amber-900'>
                <div className='main'>
                    <div className='content'>
                        <h4 className='text-3xl md:text-2xl font-regular font-manrope tracking-tighter leading-tight md:pr-8'>
                          Writing
                        </h4>
                        <p>/ˈraɪ.tɪŋ/</p>
                        <p>
                        This criterion assesses how appropriate, accurate and relevant the response is, in fulfilling the requirements set out in the task.
                        </p>
                    </div>
                    <div className='cta pt-6'>
                    <Link href="/writing" >
                        <button className='bg-white items-center flex-row-reverse flex p-2'>
                          <Image
                            priority
                            src={linkIcon}
                            alt='link-icon'
                          />
                            <span>View Module</span>
                          </button>
                    </Link>
                    </div>
                </div>
                <div className='submodule'>
                  
                </div>
            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}
