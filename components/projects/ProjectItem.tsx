import coffee_connection from '../../assets/img/coffee_connection.png'
import coin from '../../assets/img/coininsights.png'
import covid from '../../assets/img/covid.png'
import affirmations from '../../assets/img/affirmations.png'
import Image from 'next/image'
import type { ProjectProps } from '../../types/types'

const imgMap = {
  affirmations,
  coffee_connection,
  coin,
  covid
}

const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <div className='project-item' >
      <div className='explanation-container'>
        <h3>{ project.title }</h3>
        <p className='project-description'>{ project.description }</p>
        <div className='technologies-used'>
          { project.technologies.map((tech, i) => (
            <span className='tech-span' key={ i }>{ tech }</span>
          )) }
        </div>
        <div className='btn-container'>
          { project.btnText.length > 0 && <a className='btn' href={ project.link } target='_blank' rel='noreferrer'>
            { project.btnText }
          </a> }
          { project.code_link.length > 0 && (
            <a
              className='btn'
              href={ project.code_link }
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          ) }
        </div>
      </div>
      <div style={ { padding: "1rem" } }>
        {/* @ts-ignore */ }
        <Image src={ imgMap[project.image] } width={ 700 } height={ 450 } objectFit={ 'cover' } />
      </div>
    </div>
  )
}

export default ProjectItem
