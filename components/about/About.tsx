import AboutMe from './AboutMe'
import TechnologiesIKnow from './TechnologiesIKnow'

const About = () => {
  return (
    <div className='section_container' id='about'>
      <div className='about'>
        <h1 className='section__heading'>A Little About me</h1>
        <div className='section__content'>
          <AboutMe />
          <TechnologiesIKnow />
        </div>
      </div>
    </div>
  )
}

export default About
