import type { ProjectProps } from '@/lib/definitions'
import AccessibleAnchor from '@/ui/components/common/AccessibleAnchor'

const ProjectCta = ({ project }: ProjectProps) => {
    return (
        <div className='btn-container'>
            { project.btnText.length > 0 && <AccessibleAnchor name={ project.btnText } url={ project.link } /> }
            { project.code_link.length > 0 && (
                <AccessibleAnchor
                    name='Github'
                    url={ project.code_link }
                />
            ) }
        </div>
    )
}
export default ProjectCta