'use client'

import { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import dynamic from 'next/dynamic'

// Importação dinâmica para o componente estático
const Quote = dynamic(() => import('@components/@quote'))

// Importação padrão para ScrollAnimation
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'

function QuoteScene() {
  const { quote } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    ScrollAnimation(containerRef.current)
  }, {
    scope: containerRef
  })

  if (!quote) return null

  return (
    <section
      ref={containerRef}
      className="flex min-h-dvh w-full flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <span className="flex items-center justify-center">
        <Quote author={quote.author} phrase={quote.phrase} />
      </span>
    </section>
  )
}

export default memo(QuoteScene)