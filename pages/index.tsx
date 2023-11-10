import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '@/components/sections/landing/Landing'
import About from '@/components/sections/about/About'
import Projects from '@/components/sections/projects/Projects'
import Testimonials from '@/components/sections/testimonials/Testimonials'

const Home: NextPage = () => {
  return (
    <main >
      <Head><title>Tanner Barcelos</title></Head>
      <div className='container'>
        <Landing />
        <About />
        <Projects />
        <Testimonials />
      </div>
    </main>
  )
}

export default Home
