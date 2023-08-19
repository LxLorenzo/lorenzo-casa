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
import projectsData from './ProjectData'

export type IProjectPath =
  | 'promptopia'
  | 'fsw-trips'
  | 'gericht'
  | 'hoobank'
  | 'gpt-project'
  | 'multi-step-form'

export interface IProject {
  id: number
  logo?: string
  name: string
  path: IProjectPath
  img: string
  short_description: string | undefined
  description: string
  icons: string[]
  url: string
  repo_url: string
  color?: string
}

export const getProjects = () => {
  const projects = projectsData.map((p) => ({
    id: p.id,
    logo: p.logo,
    name: p.name,
    path: p.path,
    img: p.img,
    short_description: p.short_description,
    icons: p.icons,
    url: p.url,
    repo_url: p.repo_url,
    description: p.description,
    color: p.color,
  }))
  return { projects }
}

export const getProject = (projectName: IProjectPath) => {
  const project = projectsData.find((p) => p.path === projectName)

  return { project }
}

export const iconMap: Record<string, IconType> = {
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

export const iconTextMap: Record<string, string> = {
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

export const iconGroupColorMap: Record<string, string> = {
  SiNextdotjs:
    '#171616 dark:group-hover:text-[#171616] group-hover:text-[#171616]',
  SiTypescript:
    '#3079c6 dark:group-hover:text-[#3079c6] group-hover:text-[#3079c6]',
  SiPrisma:
    '#2c3749 dark:group-hover:text-[#2c3749] group-hover:text-[#2c3749]',
  SiSupabase:
    '#5811ac dark:group-hover:text-[#5811ac] group-hover:text-[#5811ac]',
  SiStripe:
    '#625aff dark:group-hover:text-[#625aff] group-hover:text-[#625aff]',
  SiTailwindcss:
    '#38bcf9 dark:group-hover:text-[#38bcf9] group-hover:text-[#38bcf9]',
  SiMongodb:
    '#00ed64 dark:group-hover:text-[#00ed64] group-hover:text-[#00ed64]',
  SiMongoose:
    '#880101 dark:group-hover:text-[#880101] group-hover:text-[#880101]',
  SiVite: '#bd34fe dark:group-hover:text-[#bd34fe] group-hover:text-[#bd34fe]',
  SiReact: '#097fa4 dark:group-hover:text-[#097fa4] group-hover:text-[#097fa4]',
  SiCss3: '#1572b7 dark:group-hover:text-[#1572b7] group-hover:text-[#1572b7]',
  SiHtml5: '#e64b23 dark:group-hover:text-[#e64b23] group-hover:text-[#e64b23]',
  SiJavascript:
    '#f4dc1c dark:group-hover:text-[#f4dc1c] group-hover:text-[#f4dc1c]',
}

export const iconColorMap: Record<string, string> = {
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
