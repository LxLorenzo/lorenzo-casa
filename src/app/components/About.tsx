import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section
      className="container mx-auto h-screen px-4 md:px-8 py-28 lg:p-28 flex flex-col-reverse justify-center items-center gap-5 md:flex-row md:gap-32"
      id="about"
    >
      <div className="text-center md:text-left">
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem font-bold text-primary">
          Sobre mim
        </h2>
        <p className="text-zinc-500 mt-5">
          Olá! Meu nome é Lorenzo Casa, sou desenvolvedor Front-End React.js e
          Next.js.
          <br />
          Saiba mais sobre mim e meus projetos.
        </p>
      </div>
      <div className="">
        <Image
          src="/perfil.jpg"
          width={300}
          height={300}
          alt="Perfil"
          className="rounded-full md:mt-20 xl:mt-32"
        />
      </div>
    </section>
  )
}

export default About
