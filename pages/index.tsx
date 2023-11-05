import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '@/components/sections/landing/Landing'
import About from '@/components/sections/about/About'
import Projects from '@/components/sections/projects/Projects'
import Testimonials from '@/components/sections/testimonials/Testimonials'

const Home: NextPage = () => {
  return (
    <>
      <Head><title>Tanner Barcelos</title></Head>
      <Landing />
      <About />
      <Projects />
      <Testimonials />
    </>
  )
}

export default Home
