import React from 'react'
import Button from './Button'
import Link from 'next/link'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiArrowDownDoubleFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <section className="container mx-auto h-[calc(100vh-4.75rem)] relative px-4 md:px-8 py-28 lg:p-28 text-center flex flex-col">
      <div className="absolute w-[200px] sm:w-[350px] h-[40px] bg-firstGradientPattern blur-[110px] left-10 lg:left-[100px] lg:top-[130px] 2xl:top-[200px] 2xl:left-[110px]" />
      <div className="absolute w-[200px] sm:w-[350px] h-[40px] bg-secondGradientPattern blur-[110px] bottom-[300px] right-10 lg:right-[100px]" />
      <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold text-primary flex flex-col">
        Seu próximo desenvolvedor
        <span className="gradient__text font-black text-[2.8rem] md:text-[3.3rem] lg:text-[4rem] xl:text-[5.3rem] 2xl:text-[5.8rem]">
          Front-End :)
        </span>
      </h1>
      <p className="text-sm sm:text-base text-zinc-500 mt-5">
        Olá! Meu nome é Lorenzo Casa, sou desenvolvedor Front-End React.js e
        Next.js.
        <br />
        Saiba mais sobre mim e meus projetos.
      </p>
      <div className="flex items-center justify-center gap-2 sm:gap-5">
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
