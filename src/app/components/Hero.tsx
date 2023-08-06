import React from 'react'
import Button from './Button'
import Link from 'next/link'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiArrowDownDoubleFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <section className="container mx-auto h-[calc(100vh-4.75rem)] relative p-5 px-28 py-28 text-center flex flex-col">
      <div className="absolute w-[350px] h-[40px] bg-firstGradientPattern blur-[100px] top-[200px] left-[150px]" />
      <div className="absolute w-[350px] h-[40px] bg-secondGradientPattern blur-[100px] bottom-[300px] right-[150px]" />
      <h1 className="2xl:text-[5.5rem] font-bold text-primary flex flex-col">
        Seu próximo desenvolvedor
        <span className="gradient__text font-black">Front-End :)</span>
      </h1>
      <p className="text-zinc-500">
        Olá! Meu nome é Lorenzo Casa, sou desenvolvedor Front-End React.js e
        Next.js.
        <br />
        Saiba mais sobre mim e meus projetos.
      </p>
      <div className="flex items-center justify-center gap-5">
        <Button
          variant="black"
          className="flex items-center gap-3"
          href="https://github.com/LxLorenzo"
          target="_blank"
        >
          <BsGithub />
          GitHub
        </Button>
        <Button
          variant="white"
          className="flex items-center gap-3"
          href="https://www.linkedin.com/in/lorenzocasa/"
          target="_blank"
        >
          <BsLinkedin />
          LinkedIn
        </Button>
      </div>
      <Link
        href="#about"
        className="text-zinc-400 self-center absolute bottom-[15%] animate-bounce p-5"
      >
        <RiArrowDownDoubleFill size={24} />
      </Link>
    </section>
  )
}

export default Hero
