'use client'

import Project from './Project'
import { IProject, getProjects } from '../data'
import { useState } from 'react'
import Button from './Button'

const { projects } = getProjects()

const initialProjectList = 3
const incrementProjectList = 3

const ProjectsFeed = () => {
  const [displayProjects, setDisplayProjects] = useState(initialProjectList)
  const [project, setProject] = useState(projects)

  const handleLoadMore = () => {
    setDisplayProjects(displayProjects + incrementProjectList)
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:gap-12 sm:flex-wrap sm:flex-row justify-center">
        {project.slice(0, displayProjects).map((project: IProject) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      {displayProjects < project.length && (
        <Button onClick={handleLoadMore}>Carregar mais</Button>
      )}
    </>
  )
}

export default ProjectsFeed
