'use client'

import { IProjectPath, getProject } from '@/app/data'
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useRouter } from 'next/navigation'
import About from '../components/About'
import Technologies from '../components/Technologies'

const ProjectDetails = ({ params }: { params: { path: IProjectPath } }) => {
  const { project } = getProject(params.path)
  const router = useRouter()

  useEffect(() => {
    if (!project) {
      router.push('/not-found')
    }
  }, [project])

  if (!project) {
    return null
  }
  return (
    <>
      <Hero project={project} params={params} />
      <About project={project} />
      <Technologies project={project} />
    </>
  )
}

export default ProjectDetails
