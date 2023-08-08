import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Footer = () => {
  return (
    <section className="flex mx-auto flex-col py-14 items-center bg-zinc-950 gap-12 sm:flex-row sm:justify-around">
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-500 font-semibold text-2xl">Navegue</h4>
        <Link href="">Início</Link>
        <Link href="#about">Sobre</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contacth">Contato</Link>
      </div>
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-500 font-semibold text-2xl">Projetos</h4>
        <Link href="">Projeto 1</Link>
        <Link href="#about">Projeto 2</Link>
        <Link href="#projects">Projeto 3</Link>
        <Link href="#contacth">Projeto 4</Link>
      </div>
      <div className="flex flex-col text-center text-zinc-50 text-sm gap-5">
        <h4 className="text-zinc-500 font-semibold text-2xl">Contato</h4>
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
