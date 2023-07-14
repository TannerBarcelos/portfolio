import projects from '../../public/data/projects.json'
import ProjectItem from './ProjectItem'

const ProjectList = () => {
    return (
        <>
            { projects.map((project, i) => {
                return (
                    <ProjectItem
                        project={ project }
                        key={ i }
                    />
                )
            }) }
        </>
    )
}
export default ProjectList