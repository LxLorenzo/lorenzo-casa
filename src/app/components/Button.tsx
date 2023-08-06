import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'white' | 'black'
}

const Button = ({ variant = 'white', className, ...props }: ButtonProps) => {
  const variants = {
    white:
      'bg-tranparent text-zinc-950 border border-zinc-950 hover:bg-zinc-950 hover:text-zinc-50',
    black: 'bg-zinc-950 text-zinc-50 hover:bg-zinc-900',
  }

  const _className = twMerge(
    variants[variant],
    'px-7 py-3 rounded-full font-bold transition-all mt-10',
    className,
  )

  return <a {...props} className={`${_className}`}></a>
}

export default Button
