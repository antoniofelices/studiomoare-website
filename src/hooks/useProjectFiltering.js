import { useState } from 'react'

export const useProjectFiltering = (projectsRaw) => {
    const projectsSorted = projectsRaw.sort(
        (a, b) => b.data.sortOrder - a.data.sortOrder
    )
    const [projects, setProjects] = useState(projectsSorted)

    const filterByTag = (tag) => {
        setProjects(
            projectsSorted.filter((item) => item.data.tags.includes(tag))
        )
    }

    const handleWordPress = () => filterByTag('WordPress')
    const handleReact = () => filterByTag('React')

    const handleAll = () => {
        setProjects(projectsSorted)
    }

    return { projects, handleWordPress, handleReact, handleAll }
}
