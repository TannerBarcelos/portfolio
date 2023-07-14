import Image from 'next/image'
import type { ProjectProps } from '../../types/types'
import TechnologiesUsed from './technologies/TechnologiesUsed'
import ProjectCta from './ProjectCta'

const ProjectItem = ({ project }: ProjectProps) => {
  const imagePath = `/img/${project.imageName}.png`
  return (
    <div className='project-item' >
      <div className='explanation-container'>
        <h3>{ project.title }</h3>
        <p className='project-description'>{ project.description }</p>
        <TechnologiesUsed project={ project } />
        <ProjectCta project={ project } />
      </div>
      <div style={ { padding: "1rem" } }>
        <Image src={ imagePath } width={ 700 } height={ 450 } objectFit={ 'cover' } />
      </div>
    </div>
  )
}

export default ProjectItem
