import type { ProjectProps } from '@/lib/definitions'
import A11YLink from '@/ui/components/common/AccessibleAnchor'

function ProjectCta({ project }: ProjectProps) {
    return (
        <div className='btn-container'>
            { project.btnText.length > 0 && <A11YLink name={ project.btnText } url={ project.link } /> }
            { project.code_link.length > 0 && (
                <A11YLink
                    name='Github'
                    url={ project.code_link }
                />
            ) }
        </div>
    )
}
export default ProjectCta