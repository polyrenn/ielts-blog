import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-4">
          <div className='branding'>
              <h5 className="text-xl lg:text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                IELTSOLUTION
              </h5>
          </div>
          <div className='footer-items grid grid-cols-2 md:grid-cols-3'>
              <div className='flex flex-col'>
                <Link href="/speaking" className='font-medium'>
                      Speaking
              </Link>
              <Link href="/speaking#answering">
                Answering Guide
              </Link>
              </div>

              <div className=''>
                <Link href="/speaking" className='font-medium'>
                      Speaking
              </Link>
              </div>

              <div className=''>
                <Link href="/speaking" className='font-medium'>
                      Speaking
              </Link>
              </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
