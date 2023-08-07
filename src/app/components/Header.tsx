'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="container mx-auto flex justify-between items-center px-4 lg:px-28 py-5 relative">
      <Link href="" className="text-2xl md:text-3xl font-bold gradient__text">
        &lt;LorenzoLx /&gt;
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex gap-24 text-zinc-700 font-semibold">
          <li>
            <Link href="#about">Sobre</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
        </ul>
      </nav>
      <button className="hidden lg:flex 2xl:basis-52 text-zinc-700 font-semibold">
        Get in Touch
      </button>
      {isMenuOpen ? (
        <div className="bg-slate-50 z-10 lg:hidden flex flex-col absolute right-0 top-[10px] px-8 py-5 rounded-lg items-center gap-7 text-center">
          <RiCloseFill
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="self-end cursor-pointer"
            fontSize={28}
          />
          <nav>
            <ul className="gap-3 text-zinc-700 font-semibold flex flex-col">
              <li>
                <Link href="#sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/">Projetos</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
            </ul>
          </nav>
          <button className="flex 2xl:basis-52 text-zinc-700 font-semibold">
            Get in Touch
          </button>
        </div>
      ) : (
        <div className="flex lg:hidden">
          <Image
            src="/menu.svg"
            width={28}
            height={28}
            alt="Menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>
      )}
    </header>
  )
}

export default Header
