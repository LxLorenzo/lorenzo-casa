'use client'

import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'

const ScrollToTop = () => {
  const [toggleScroll, setToggleScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setToggleScroll(true) : setToggleScroll(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {toggleScroll && (
        <div>
          <BsArrowUpShort
            className="hidden md:block fixed bottom-10 right-10 text-zinc-50 bg-zinc-950 rounded-sm text-4xl cursor-pointer"
            onClick={handleScrollToTop}
          />
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
