import type { ProjectProps } from '../../types/types'

const ProjectCta = ({ project }: ProjectProps) => {
    return (
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
    )
}
export default ProjectCta