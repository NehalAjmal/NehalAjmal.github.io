'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

const QuotePhrase = dynamic(() => import('./Phrase'), { ssr: false })
const QuoteIcon = dynamic(() => import('./Icon'), { ssr: false })

interface QuoteProps {
  phrase: string[];
  author: string;
}

function QuoteComponent({ phrase, author }: QuoteProps) {
  return (
    <div className="relative flex flex-col items-end justify-center gap-2.5">
      <QuotePhrase phrase={phrase} author={author} />
      <QuoteIcon />
    </div>
  )
}

export default memo(QuoteComponent)
