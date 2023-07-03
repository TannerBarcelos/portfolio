import ProjectList from '../../assets/data/projects.json'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='section_container' id='projects'>
      <div className='projects'>
        <h1 className='section__heading'>What I&apos;ve Built</h1>
        { ProjectList.map((project, i) => {
          return (
            <ProjectItem
              project={ project }
              key={ i }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default Projects
