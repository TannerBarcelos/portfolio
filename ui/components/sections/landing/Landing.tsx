import CallToAction from './CallToAction'

function Landing() {
  return (
    <section className='section_container' id='home'>
      <div className='hero-content'>
        <div className='headline' aria-label='Landing page headline section'>
          <h2>Tanner Barcelos</h2>
          <p>Senior ML Engineer passionate about building beautiful and intuitive web platfroms that simplify MLOps</p>
        </div>
        <CallToAction />
      </div>
    </section>
  )
}

export default Landing
