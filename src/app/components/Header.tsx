import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center px-28 py-5">
      <Link href="" className="text-3xl font-bold gradient__text">
        &lt;LorenzoLx /&gt;
      </Link>
      <nav>
        <ul className="flex gap-24 text-zinc-700 font-semibold">
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
      <button className="2xl:basis-52 text-zinc-700 font-semibold">
        Get in Touch
      </button>
    </header>
  )
}

export default Header
