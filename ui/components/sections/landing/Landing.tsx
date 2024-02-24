import CallToAction from './CallToAction'

function Landing() {
  return (
    <section className='section_container' id='home'>
      <div className='hero-content'>
        <div className='headline' aria-label='Landing page headline section'>
          <h2>Tanner Barcelos</h2>
          <p>I am a passionate Full Stack Engineer with a strong focus on web development and product design.</p>
        </div>
        <CallToAction />
      </div>
    </section>
  )
}

export default Landing
