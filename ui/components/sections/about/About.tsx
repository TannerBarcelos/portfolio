import AboutMe from './AboutMe'
import KnownTech from './KnownTech'

const About = () => {
  return (
    <section className='section_container' id='about' aria-label="About Tanner Barcelos">
      <div className='about'>
        <h1 className='section__heading'>A Little About me</h1>
        <div className='section__content'>
          <AboutMe />
          <KnownTech />
        </div>
      </div>
    </section>
  )
}

export default About
