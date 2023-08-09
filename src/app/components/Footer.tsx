import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { IProject, getProjects } from '../data'

const Footer = () => {
  const { projects } = getProjects()
  return (
    <section className="flex mx-auto flex-col py-14 items-center bg-zinc-950 gap-12 sm:flex-row sm:justify-around">
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-50 font-semibold text-2xl">Navegue</h4>
        <Link href="">Início</Link>
        <Link href="#about">Sobre</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contacth">Contato</Link>
      </div>
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-50 font-semibold text-2xl">Projetos</h4>
        {projects.slice(0, 4).map((project: IProject) => (
          <Link href={`/${project.path}`} key={project.id}>
            {project.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-50 font-semibold text-2xl">Contato</h4>
        <Link
          href="https://www.linkedin.com/in/lorenzocasa/"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          LinkedIn
          <FiExternalLink fontSize={12} />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5511961825491"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          WhatsApp
          <FiExternalLink fontSize={12} />
        </Link>
        <Link
          href="https://github.com/LxLorenzo"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          GitHub
          <FiExternalLink fontSize={12} />
        </Link>
        <Link
          href="mailto:lorenzocasa1235@gmail.com"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          Email
          <FiExternalLink fontSize={12} />
        </Link>
      </div>
    </section>
  )
}

export default Footer
