import Image from 'next/image'
import type { ProjectProps } from '@/lib/definitions'
import TechnologiesUsed from './technologies/TechnologiesUsed'
import ProjectCta from './ProjectCta'

function ProjectItem({ project }: ProjectProps) {
  return (
    <div className='project-item' >
      <div className='explanation-container'>
        <h3>{ project.title }</h3>
        { project.isWorkProject && <p className='work-project'>This is a project built while working at Visa</p> }
        { project.underConstruction && <span className='construction-pill'>Under Construction</span> }
        <TechnologiesUsed project={ project } />
        <ProjectCta project={ project } />
      </div>
      <div className="project-img" style={ { padding: "1rem" } }>
        <Image src={ `/img/${project.imageName}.png` } width={ 800 } height={ 450 } alt={ project.imageName } />
      </div>
    </div>
  )
}

export default ProjectItem
