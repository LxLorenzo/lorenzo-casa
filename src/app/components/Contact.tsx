'use client'

import React from 'react'
import Button from './Button'
import { BsDiscord, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { toast } from 'react-toastify'

const Contact = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('lorenzolx.')
    toast.success('Copiado para a área de transferência!', {
      position: 'bottom-center',
      autoClose: 1500,
    })
  }

  return (
    <section
      className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col items-center gap-12"
      id="contact"
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] font-bold text-primary">
        Contato
      </h2>
      <p className="text-zinc-500 text-center">
        Ficou interessado? Entre em contato comigo por algum dos links abaixo.
      </p>
      <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:justify-center">
        <Button
          className="flex items-center gap-3 mt-0"
          href="https://www.linkedin.com/in/lorenzocasa/"
          target="_blank"
        >
          <BsLinkedin />
          LinkedIn
        </Button>
        <Button
          className="flex items-center gap-3 mt-0"
          href="https://api.whatsapp.com/send?phone=5511961825491"
          target="_blank"
        >
          <BsWhatsapp />
          WhatsApp
        </Button>
        <Button
          className="flex items-center gap-3 mt-0"
          href="https://github.com/LxLorenzo"
          target="_blank"
        >
          <BsGithub />
          GitHub
        </Button>
        <Button className="flex items-center gap-3 mt-0" onClick={handleCopy}>
          <BsDiscord />
          lorenzolx.
        </Button>
        <Button
          className="flex items-center gap-3 mt-0"
          href="mailto:lorenzocasa1235@gmail.com"
        >
          <MdOutlineAlternateEmail />
          lorenzocasa1235@gmail.com
        </Button>
      </div>
    </section>
  )
}

export default Contact
