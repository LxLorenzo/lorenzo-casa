import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'white' | 'black'
}

const Button = ({ variant = 'white', className, ...props }: ButtonProps) => {
  const variants = {
    white:
      'bg-tranparent text-zinc-950 border border-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950',
    black:
      'bg-zinc-950 text-zinc-50 hover:bg-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-950',
  }

  const _className = twMerge(
    variants[variant],
    'px-5 py-[10px] sm:px-6 text-sm lg:text-base sm:py-3 rounded-full transition-colors mt-10 cursor-pointer',
    className,
  )

  return <a {...props} className={`${_className}`}></a>
}

export default Button
