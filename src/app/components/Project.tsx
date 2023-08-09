import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { IconType } from 'react-icons'
import { IProject } from '../data'

import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiVite,
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si'

const iconMap: Record<string, IconType> = {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiVite,
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
}

const iconTextMap: Record<string, string> = {
  SiNextdotjs: 'Next.js',
  SiTypescript: 'TypeScript',
  SiPrisma: 'Prisma',
  SiSupabase: 'Supabase',
  SiStripe: 'Stripe',
  SiTailwindcss: 'Tailwind CSS',
  SiMongodb: 'MongoDB',
  SiMongoose: 'Mongoose',
  SiVite: 'Vite',
  SiReact: 'React',
  SiCss3: 'CSS',
  SiHtml5: 'HTML',
  SiJavascript: 'JavaScript',
}

const iconColorMap: Record<string, string> = {
  SiNextdotjs: 'hover:text-[#171616]',
  SiTypescript: 'hover:text-[#3079c6]',
  SiPrisma: 'hover:text-[#2c3749]',
  SiSupabase: 'hover:text-[#5811ac]',
  SiStripe: 'hover:text-[#625aff]',
  SiTailwindcss: 'hover:text-[#38bcf9]',
  SiMongodb: 'hover:text-[#00ed64]',
  SiMongoose: 'hover:text-[#880101]',
  SiVite: 'hover:text-[#bd34fe]',
  SiReact: 'hover:text-[#097fa4]',
  SiCss3: 'hover:text-[#1572b7]',
  SiHtml5: 'hover:text-[#e64b23]',
  SiJavascript: 'hover:text-[#f4dc1c]',
}

interface IProjectCard {
  project: IProject
}

const Project = ({ project }: IProjectCard) => {
  return (
    <div className="max-w-[400px] md:max-w-[46%] lg:max-w-[400px] flex flex-col border border-zinc-950 rounded-lg transition hover:scale-[1.008]">
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
        <p className="text-zinc-500 text-sm">{project.short_description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-1.5">
            {project.icons.map((icon, index) => {
              const Icon = iconMap[icon]
              if (!Icon) return null
              return (
                <Icon
                  key={index}
                  className={`w-4 h-4 cursor-pointer transition text-zinc-500 ${iconColorMap[icon]}`}
                  title={iconTextMap[icon]}
                />
              )
            })}
          </div>
          <Button
            href={`/${project.path}`}
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
