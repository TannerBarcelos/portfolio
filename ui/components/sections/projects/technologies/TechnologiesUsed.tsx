import type { ProjectProps } from '@/lib/definitions'

function TechnologiesUsed({ project: { technologies } }: ProjectProps) {
    return (
        <div className='technologies-used'>
            { technologies.map((techItem, i) => (
                <span className='tech-span' key={ i }>{ techItem }</span>
            )) }
        </div>
    )
}
export default TechnologiesUsed