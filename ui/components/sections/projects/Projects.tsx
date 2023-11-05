import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <section className='section_container' id='projects' aria-label="Tanner's projects">
      <div className='projects'>
        <h1 className='section__heading'>What I&apos;ve Built</h1>
        <ProjectList />
      </div>
    </section>
  )
}

export default Projects
