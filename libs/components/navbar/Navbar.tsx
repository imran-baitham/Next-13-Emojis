'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ReactIcon } from '../ReactIcon/ReactIcon'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'light') {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#E4E6EB]"
        >
          <span>
            <ReactIcon className='w-5 h-5' icon="RiMoonClearLine" />
          </span>
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme('light')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#65676B]"
        >
          <span>
            <ReactIcon className='w-5 h-5' icon="ImSun" />
          </span>
        </button>
      )
    }
  }
  return (
    <header className="fixed top-0 left-0 w-full z-[99]">
      <nav className="container h-[3.5rem] px-[1rem] flex items-center justify-between rounded lg:mt-2 shadow-[0_1px_2px_rgba(0,0,0,0.2)] bg-white dark:bg-[#18191A]">
        <Link
          href="/"
          className="text-[#050505] cursor-pointer dark:text-[#E4E6EB] font-bold"
        >
          EMOJIDB
        </Link>
        {renderThemeChanger()}
      </nav>
    </header>
  )
}

export default Navbar
