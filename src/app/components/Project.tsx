import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface ProjectProps {
  title: string
  description: string
  img: string
}

const Project = ({ title, description, img }: ProjectProps) => {
  return (
    <div className="sm:max-w-[46%] flex flex-col border border-zinc-950 rounded-lg">
      <Image
        src={img}
        width={400}
        height={400}
        style={{ objectFit: 'cover' }}
        alt="Project"
        className="rounded-t-lg"
      />
      <div className="flex flex-col p-2">
        <h3 className="text-2xl text-primary font-semibold mt-2">{title}</h3>
        <p className="text-zinc-500 text-sm mb-5">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-black" />
            <div className="w-5 h-5 bg-black" />
            <div className="w-5 h-5 bg-black" />
          </div>
          <Button className="mt-0">Ver mais</Button>
        </div>
      </div>
    </div>
  )
}

export default Project
