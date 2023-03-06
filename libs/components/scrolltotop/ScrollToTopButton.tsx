'use client'
import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { ReactIcon } from '../ReactIcon/ReactIcon'

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()
  // const pageYOffset = 0
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setShowScrollTop(pageYOffset >= 400)
  }, [pageYOffset])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <a
      className={showScrollTop ? 'scroll_top bottom-[1.5rem]' : 'scroll_top'}
      onClick={scrollTop}
    >
      <ReactIcon icon="ImArrowUp2" />
    </a>
  )
}

export default ScrollToTopButton
