import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section
      className="container mx-auto h-screen px-4 md:px-8 py-28 lg:p-28 flex flex-col items-center md:flex-row md:gap-32"
      id="about"
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold text-primary">
        Sobre mim
      </h2>
      <div className="flex flex-col mt-12 items-center">
        <Image
          src="/perfil.jpg"
          width={300}
          height={300}
          alt="Perfil"
          className="rounded-full border-[3px] border-zinc-950"
        />
        <div className="text-zinc-500 mt-12 text-justify">
          <p>
            Sou um entusiasta da web e sou movido pelo desafio de criar
            interfaces interativas e responsivas que proporcionem uma
            experiência excepcional aos usuários. Com um olhar atento ao design
            e à usabilidade, sempre busco aprimorar minhas habilidades para
            oferecer soluções modernas e inovadoras.
          </p>
          <p>
            Meu objetivo é continuar crescendo como desenvolvedor front-end,
            participando de projetos desafiadores e inovadores. Estou em busca
            de uma primeira oportunidades para contribuir com meu conhecimento
            técnico e habilidades de comunicação para alcançar resultados
            excepcionais.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
