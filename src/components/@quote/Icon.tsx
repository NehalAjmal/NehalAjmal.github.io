import { memo } from 'react'
import { Quote } from 'lucide-react'

function QuoteIcon () {
  return (
    <div id="quote-icon" className="absolute -left-14 -top-16 z-0 flex size-fit items-center justify-center opacity-40 sm:-left-16 sm:-top-24 md:-left-20 md:-top-28 lg:-left-24 lg:-top-32">
      <Quote className="size-16 fill-primary-blue text-primary-blue opacity-60 blur-[2px] sm:size-24 md:size-32 lg:size-40" />
    </div>
  )
}

export default memo(QuoteIcon)