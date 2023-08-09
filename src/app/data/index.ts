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
  name: string
  path: IProjectPath
  img: string
  short_description: string | undefined
  description: string
  icons: string[]
  url: string
  repo_url: string
}

export const getProjects = () => {
  const projects = projectsData.map((p) => ({
    id: p.id,
    name: p.name,
    path: p.path,
    img: p.img,
    short_description: p.short_description,
    icons: p.icons,
    url: p.url,
    repo_url: p.repo_url,
    description: p.description,
  }))
  return { projects }
}

export const getProject = (projectName: IProjectPath) => {
  const project = projectsData.find((p) => p.path === projectName)!

  return { project }
}
