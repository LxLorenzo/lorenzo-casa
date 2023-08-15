import { IProject, iconGroupColorMap, iconMap, iconTextMap } from '@/app/data'
import React from 'react'

interface IProps {
  project: IProject
}

const Technologies = ({ project }: IProps) => {
  return (
    <section className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col items-center justify-center">
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-light text-center">
        Tecnologias utilizadas
      </h2>
      <div className="flex flex-wrap gap-5 md:gap-10 items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {project.icons.map((icon, index) => {
          const Icon = iconMap[icon]
          if (!Icon) return null
          return (
            <div
              key={index}
              className="flex flex-col items-center mt-10 gap-1 cursor-default group"
            >
              <Icon
                className={`w-10 h-10 transition text-zinc-500 dark:text-zinc-300 ${iconGroupColorMap[icon]} 
                `}
              />
              <p className="text-center">{iconTextMap[icon]}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Technologies
