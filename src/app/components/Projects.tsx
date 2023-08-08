import React from 'react'
import Project from './Project'

import projectsContants from '../contants/ProjectConstants'

const Projects = () => {
  return (
    <section
      className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col items-center gap-12"
      id="projects"
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold text-primary">
        Projetos
      </h2>
      <p className="text-zinc-500 text-center">
        Conheça algum de meus projetos e meus conhecimentos.
      </p>
      <div className="flex flex-col gap-6 xl:gap-12 sm:flex-wrap sm:flex-row justify-center">
        {projectsContants.map((project: any) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            icons={project.icons || []}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
