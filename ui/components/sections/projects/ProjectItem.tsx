import Image from 'next/image'
import type { ProjectProps } from '@/lib/definitions'
import TechnologiesUsed from './technologies/TechnologiesUsed'
import ProjectCta from './ProjectCta'

const ProjectItem = ({ project }: ProjectProps) => {
  const imagePath = `/img/${project.imageName}.png`
  const underConstruction = project.underConstruction
  return (
    <div className='project-item' >
      <div className='explanation-container'>
        <h3>{ project.title }</h3>
        { underConstruction && <span className='construction-pill'>Under Construction</span> }
        <TechnologiesUsed project={ project } />
        <ProjectCta project={ project } />
      </div>
      <div style={ { padding: "1rem" } }>
        <Image src={ imagePath } width={ 800 } height={ 450 } alt={ project.imageName } />
      </div>
    </div>
  )
}

export default ProjectItem
