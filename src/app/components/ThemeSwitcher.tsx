'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      {theme === 'light' ? (
        <BsSun className="text-zinc-950" fontSize={20} />
      ) : (
        <BsMoon className="text-zinc-50" fontSize={20} />
      )}
    </button>
  )
}

export default ThemeSwitcher
