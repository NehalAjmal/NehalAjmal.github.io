import { Quote } from '@typess/types'
import { memo } from 'react'

function QuotePhrase ({ phrase, author }: Quote) {
  return (
    <>
      <span className="relative z-10 flex flex-col">
        <p id="quote-one" className="text-end text-lg text-900 sm:text-[24px] lg:text-xl">{phrase[0]}</p>
        <p id="quote-two" className="text-end text-lg text-900 sm:text-[24px] lg:text-xl">{phrase[1]}</p>
      </span>
      <p id="quote-author" className="relative z-10 text-end text-xs text-800 sm:text-sm">{`~  ${author}`}</p>
    </>
  )
}

export default memo(QuotePhrase)