import React from 'react'
import Project from '../components/Project'
import { IProject, getProjects } from '../data'

const Projects = () => {
  const { projects } = getProjects()
  return (
    <section
      className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col items-center gap-12"
      id="projects"
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-bold text-primary">
        Projetos
      </h2>
      <p className="text-zinc-500 text-center">
        Conheça algum de meus projetos e meus conhecimentos.
      </p>
      <div className="flex flex-col gap-6 xl:gap-12 sm:flex-wrap sm:flex-row justify-center">
        {projects.map((project: IProject) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
