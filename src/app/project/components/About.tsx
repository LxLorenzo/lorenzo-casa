import Button from '@/app/components/Button'
import { IProject } from '@/app/data'
import { useTheme } from 'next-themes'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

interface IProps {
  project: IProject
}

const About = ({ project }: IProps) => {
  const { theme } = useTheme()
  return (
    <section className="w-full bg-zinc-950 dark:bg-zinc-950 py-28 text-zinc-50 flex flex-col items-center justify-center">
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-light ">
        O que é?
      </h2>
      <p className="text-center mt-10 max-w-[70%]">{project.description}</p>
      {theme === 'white' ? (
        <Button
          variant="white"
          className="bg-zinc-50 hover:bg-zinc-900 flex items-center gap-3"
          href={project.url}
          target="_blank"
        >
          <FiExternalLink />
          Visitar agora
        </Button>
      ) : (
        <Button
          variant="white"
          className="flex items-center gap-3"
          href={project.url}
          target="_blank"
        >
          <FiExternalLink />
          Visitar agora
        </Button>
      )}
    </section>
  )
}

export default About
