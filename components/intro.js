import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-4 md:mb-12">
      <h1 className="text-6xl md:text-6xl font-regular font-manrope tracking-tighter leading-tight md:pr-8">
       Ready to ace IELTS?.
      </h1>
      <h4 className="md:text-left text-lg mt-2 md:pl-8">
        Useful tips to improve your English skills
        .
      </h4>
    </section>
  )
}
