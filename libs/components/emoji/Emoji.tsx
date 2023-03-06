import React, { useCallback, useState } from 'react'
import { ReactIcon } from '../ReactIcon/ReactIcon'

interface EmojiProps {
  emoji: {
    id: number
    symbol: string
    title: string
  }
}

const Emoji = ({ emoji }: EmojiProps) => {
  const [fadeIn, setFadeIn] = useState(false)

  const handleClipboard = useCallback(
    (e: React.MouseEvent) => {
      setFadeIn(true)
      setTimeout(() => setFadeIn(false), 1000)
      navigator.clipboard.writeText(emoji.symbol)
    },
    [emoji.symbol],
  )

  return (
    <div
      className="selector"
      key={emoji.id}
      title={`Copy ${emoji.title}`}
      onClick={handleClipboard}
    >
      <div className="text-[2.4rem]">{emoji.symbol}</div>
      <div className="text-center text-[12px] text-[#050505] dark:text-[#E4E6EB]">
        {emoji.title.slice(0, 17)}
      </div>
      {/* <div className="fixed w-full left-0 bottom-1 flex justify-center m-auto bg-red-400"> */}
        <div
          className={`item-copy fixed z-10 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center space-x-1 bg-black rounded-full text-white text-[15px] pl-2 pr-4 py-2 font-semibold">
            <ReactIcon icon="RiCheckboxCircleFill" className="w-5 h-5" />
            <span>Emoji Copied to the Clipboard</span>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Emoji
