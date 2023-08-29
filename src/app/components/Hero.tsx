import React from 'react'
import Button from './Button'
import Link from 'next/link'

import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiArrowDownDoubleFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <section className="container mx-auto h-[calc(100vh-4.75rem)] relative px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 text-center flex flex-col">
      <div className="absolute w-[200px] sm:w-[350px] h-[40px] dark:bg-transparent bg-firstGradientPattern blur-[150px] left-10 lg:left-[100px] lg:top-[130px] 2xl:top-[200px] 2xl:left-[110px] z-20" />
      <div className="absolute w-[200px] sm:w-[350px] h-[40px] dark:bg-transparent dark:bg-none bg-secondGradientPattern blur-[150px] bottom-[200px] right-10 lg:right-[100px] z-20" />
      <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[3.3rem] lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold text-primary flex flex-col">
        Seu próximo desenvolvedor
        <span className="gradient__text font-black text-[2.8rem] sm:text-[3.1rem] md:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.3rem] 2xl:text-[5.8rem]">
          Front-End :&#41;
        </span>
      </h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-5 dark:text-zinc-200">
        Olá! Meu nome é Lorenzo Casa, sou desenvolvedor Front-End React.js e
        Next.js.
        <br />
        Saiba mais sobre mim e meus projetos.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-5">
        <div className="flex gap-2 sm:gap-5">
          <Button
            variant="white"
            className="flex items-center gap-3 font-bold"
            href="https://github.com/LxLorenzo"
            target="_blank"
          >
            <BsGithub />
            GitHub
          </Button>
          <Button
            variant="white"
            className="flex items-center gap-3 font-bold"
            href="https://www.linkedin.com/in/lorenzocasa/"
            target="_blank"
          >
            <BsLinkedin />
            LinkedIn
          </Button>
        </div>
        <Button
          variant="white"
          className="flex items-center gap-3 font-bold mt-0 md:mt-10"
          href="/CV Lorenzo Ferrini Gueda Casa.pdf"
          target="_blank"
          download={'CV Lorenzo Ferrini Gueda Casa.pdf'}
        >
          <BsDownload />
          Download CV
        </Button>
      </div>
      <Link
        href="#about"
        className="text-zinc-500 self-center absolute bottom-[10%] animate-bounce p-5 dark:text-zinc-300"
      >
        <RiArrowDownDoubleFill size={28} />
      </Link>
    </section>
  )
}

export default Hero
