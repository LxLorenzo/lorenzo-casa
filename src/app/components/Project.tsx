import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { IconType } from 'react-icons'

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

interface ProjectProps {
  title: string
  description: string
  img: string
  icons: string[]
}

const Project = ({ title, description, img, icons }: ProjectProps) => {
  return (
    <div className="max-w-[400px] md:max-w-[46%] lg:max-w-[400px] flex flex-col border border-zinc-950 rounded-lg transition hover:scale-[1.02]">
      <Image
        src={img}
        width={400}
        height={400}
        style={{ objectFit: 'cover' }}
        alt="Project"
        className="rounded-t-lg"
      />
      <div className="flex flex-col px-6 py-2 justify-between">
        <h3 className="text-2xl text-primary font-semibold mt-2">{title}</h3>
        <p className="text-zinc-500 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-1.5">
            {icons.map((icon, index) => {
              const Icon = iconMap[icon]
              if (!Icon) return null
              return (
                <Icon
                  key={index}
                  className="w-4 h-4 text-zinc-500 cursor-pointer transition hover:text-zinc-800"
                  title={iconTextMap[icon]}
                />
              )
            })}
          </div>
          <Button className="mt-0 px-4 py-2 sm:px-4 sm:py-2">Ver mais</Button>
        </div>
      </div>
    </div>
  )
}

export default Project
