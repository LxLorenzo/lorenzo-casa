import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Project = () => {
  return (
    <div className="w-[calc(100vw-32px)] flex flex-col border border-zinc-950 rounded-lg sm:max-w-[45%]">
      <div className="relative h-[250px]">
        <Image
          src="/perfil.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Project"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-2xl text-primary font-semibold mt-2">Titulo</h3>
        <p className="text-zinc-500 text-sm mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          alias dolore deleniti eum modi nulla esse. Quos possimus earum,
          repellat nisi quia nam consequatur, consectetur laboriosam, explicabo
          dignissimos officiis vitae?
        </p>
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
