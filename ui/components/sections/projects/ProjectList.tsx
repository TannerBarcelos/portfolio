import projects from '@/lib/data/projects.json'
import ProjectItem from './ProjectItem'

function ProjectList() {
    return (
        <>
            { projects.map((project) => {
                return (
                    <ProjectItem
                        project={ project }
                        key={ project.id }
                    />
                )
            }) }
        </>
    )
}
export default ProjectList