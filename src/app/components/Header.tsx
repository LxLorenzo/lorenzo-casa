'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="container mx-auto flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-5 relative">
      <Link
        href="/"
        className="text-2xl md:text-3xl xl:text-4xl font-bold gradient__text"
      >
        &lt;LorenzoLx /&gt;
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex gap-24 text-zinc-700 font-semibold dark:text-zinc-50">
          <li className="hover:text-zinc-950 dark:hover:text-zinc-300 transition">
            <Link href="/#about">Sobre</Link>
          </li>
          <li className="hover:text-zinc-950 dark:hover:text-zinc-300 transition">
            <Link href="/#projects">Projetos</Link>
          </li>
          <li className="hover:text-zinc-950 dark:hover:text-zinc-300 transition">
            <Link href="/#contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden lg:flex">
        <ThemeSwitcher />
      </div>
      {!isMenuOpen ? (
        <Image
          src="/menu.svg"
          width={28}
          height={28}
          alt="Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="cursor-pointer lg:hidden dark:invert"
        />
      ) : (
        <div className="fixed right-2 sm:right-8 top-5 z-50 lg:hidden">
          <RiCloseFill
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="self-end cursor-pointer"
            fontSize={28}
          />
        </div>
      )}
      <div
        className={`menu lg:hidden fixed flex flex-col right-0 top-0 w-2/3 sm:w-1/2  h-screen rounded-l-lg items-center text-center justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300 z-40`}
      >
        <nav className="flex flex-col gap-12 pb-[-160px] w-full fixed top-[30%] px-4">
          <ul className="gap-12 text-zinc-700 dark:text-zinc-50 font-semibold flex flex-col">
            <Link
              className="hover:text-zinc-950 dark:hover:text-zinc-300 link py-1.5 rounded-md"
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              className="hover:text-zinc-950 dark:hover:text-zinc-300 link py-1.5 rounded-md"
              href="/#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link
              className="hover:text-zinc-950 dark:hover:text-zinc-300 link py-1.5 rounded-md"
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </ul>
        </nav>
        <div className="font-semibold hover:text-zinc-950 w-full py-1.5 rounded-md absolute bottom-[25%] flex items-center justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
