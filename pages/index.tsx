import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Testimonials from '../components/testimonials/Testimonials'

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
