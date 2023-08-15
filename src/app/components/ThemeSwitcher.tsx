'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <button
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      {theme === 'dark' ? (
        <BiMoon className="text-zinc-50" fontSize={20} />
      ) : (
        <BiSun className="text-zinc-950" fontSize={20} />
      )}
    </button>
  )
}

export default ThemeSwitcher
