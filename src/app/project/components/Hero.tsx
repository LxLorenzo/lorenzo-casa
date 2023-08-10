'use client'

import Button from '@/app/components/Button'
import { IProject } from '@/app/data'
import Image from 'next/image'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

interface IProps {
  project: IProject
}

const Hero = ({ project }: IProps) => {
  return (
    <section className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-24 items-center">
        <div className="flex flex-col md:basis-[500px] md:items-end md:text-end">
          <div className="flex gap-5">
            <Image
              src="/promptopia-logo.svg"
              alt={project.name}
              width={50}
              height={50}
            />
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-bold text-primary">
              {project.name}
            </h1>
          </div>
          <p className="text-zinc-500">{project.short_description}</p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={project.img}
            alt={project.name}
            width={500}
            height={500}
            className="rounded-xl border-8 border-zinc-950"
          />
          <div className="bg-zinc-950 w-20 h-5 absolute bottom-[-14px]" />
        </div>
      </div>
      <div className="flex items-center justify-evenly w-full mt-10 md:mt-20">
        <Button
          variant="black"
          className="flex items-center gap-3"
          href={project.repo_url}
          target="_blank"
        >
          <BsGithub />
          Repositório
        </Button>
        <Button
          variant="white"
          className="flex items-center gap-3"
          href={project.url}
          target="_blank"
        >
          <FiExternalLink />
          Abrir projeto
        </Button>
      </div>
    </section>
  )
}

export default Hero
