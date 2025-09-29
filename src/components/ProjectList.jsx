import { useProjectFiltering } from '@hooks/useProjectFiltering'
import ProjectListItem from './ProjectListItem'
import FilterProjects from './FilterProjects'

const ProjectList = ({ projectsRaw }) => {
    const { projects, handleWordPress, handleReact, handleAll } =
        useProjectFiltering(projectsRaw)

    return (
        <>
            <FilterProjects
                onWordPress={handleWordPress}
                onReact={handleReact}
                onAll={handleAll}
            />
            <ul className="projects">
                {projects.map((project) => (
                    <ProjectListItem
                        key={project.id}
                        linktoproject={project.slug}
                        title={project.data.title}
                        type={project.data.type}
                        year={project.data.year}
                        url={project.data.url}
                    />
                ))}
            </ul>
        </>
    )
}

export default ProjectList
