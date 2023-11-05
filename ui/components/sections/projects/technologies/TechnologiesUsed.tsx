import type { ProjectProps } from '@/lib/definitions'

const TechnologiesUsed = ({ project: { technologies } }: ProjectProps) => {
    return (
        <div className='technologies-used'>
            { technologies.map((tech, i) => (
                <span className='tech-span' key={ i }>{ tech }</span>
            )) }
        </div>
    )
}
export default TechnologiesUsed