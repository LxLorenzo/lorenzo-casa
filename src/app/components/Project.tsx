import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { IProject, iconColorMap, iconMap, iconTextMap } from '../data'

interface IProjectCard {
  project: IProject
}

const Project = ({ project }: IProjectCard) => {
  return (
    <div className="max-w-[400px] md:max-w-[46%] lg:max-w-[400px] flex flex-col border border-zinc-950 dark:border-zinc-50 rounded-lg transition duration-300 hover:scale-[1.025]">
      <Image
        src={project.img}
        width={400}
        height={400}
        style={{ objectFit: 'cover' }}
        alt="Project"
        className="rounded-t-lg"
      />
      <div className="flex flex-col px-6 py-2 justify-between">
        <h3 className="text-2xl text-primary font-semibold mt-2">
          {project.name}
        </h3>
        <p className="text-zinc-500 text-sm dark:text-zinc-200">
          {project.short_description}
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-1.5">
            {project.icons.map((icon, index) => {
              const Icon = iconMap[icon]
              if (!Icon) return null
              return (
                <Icon
                  key={index}
                  className={`w-4 h-4 cursor-pointer transition duration-300 text-zinc-500 dark:text-zinc-300 ${iconColorMap[icon]}
                  `}
                  title={iconTextMap[icon]}
                />
              )
            })}
          </div>
          <Button
            href={`/project/${project.path}`}
            className="mt-0 px-4 py-2 sm:px-4 sm:py-2"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
