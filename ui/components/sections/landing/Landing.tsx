import CallToAction from './CallToAction'
import Headline from './Headline'

const Landing = () => {
  return (
    <section className='section_container' id='home'>
      <div className='hero-content'>
        <Headline />
        <CallToAction />
      </div>
    </section>
  )
}

export default Landing
