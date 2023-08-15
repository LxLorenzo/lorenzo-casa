import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { IProject, getProjects } from '../data'

const Footer = () => {
  const { projects } = getProjects()
  return (
    <section className="flex mx-auto flex-col py-14 bg-zinc-950 gap-12">
      <div className="flex flex-col sm:flex-row container mx-auto justify-between gap-12 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
          <h4 className="text-zinc-50 font-semibold text-2xl">Navegue</h4>
          <Link href="/" className="hover:text-zinc-400 transition">
            Início
          </Link>
          <Link href="#about" className="hover:text-zinc-400 transition">
            Sobre
          </Link>
          <Link href="#projects" className="hover:text-zinc-400 transition">
            Projetos
          </Link>
          <Link href="#contact" className="hover:text-zinc-400 transition">
            Contato
          </Link>
        </div>
        <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
          <h4 className="text-zinc-50 font-semibold text-2xl">Projetos</h4>
          {projects.slice(0, 4).map((project: IProject) => (
            <Link
              href={`/project/${project.path}`}
              key={project.id}
              className="hover:text-zinc-400 transition"
            >
              {project.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
          <h4 className="text-zinc-50 font-semibold text-2xl">Contato</h4>
          <Link
            href="https://www.linkedin.com/in/lorenzocasa/"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:text-zinc-500 transition"
          >
            LinkedIn
            <FiExternalLink fontSize={12} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5511961825491"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:text-zinc-500 transition"
          >
            WhatsApp
            <FiExternalLink fontSize={12} />
          </Link>
          <Link
            href="https://github.com/LxLorenzo"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:text-zinc-500 transition"
          >
            GitHub
            <FiExternalLink fontSize={12} />
          </Link>
          <Link
            href="mailto:lorenzocasa1235@gmail.com"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:text-zinc-500 transition"
          >
            Email
            <FiExternalLink fontSize={12} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between container mx-auto items-center pt-12 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <p className="text-zinc-50 text-sm">Copyright &copy; 2023</p>
        <p className="text-zinc-50 text-sm">Todos os direitos reservados.</p>
      </div>
    </section>
  )
}

export default Footer
