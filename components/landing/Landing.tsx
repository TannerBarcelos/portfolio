import CallToAction from './CallToAction'
import Headline from './Headline'

const Landing = () => {
  return (
    <div className='section_container' id='home'>
      <div className='hero-content'>
        <Headline />
        <CallToAction />
      </div>
    </div>
  )
}

export default Landing
