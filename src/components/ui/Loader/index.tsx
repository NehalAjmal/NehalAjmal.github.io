'use client'

import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { LoaderAnimation } from './Animations'

const Loader = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)

  const [ loading, setLoading ] = useState(true)
  const [ duration ] = useState(1000)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [ duration ])

  useGSAP(() => {
    if (!barRef.current) return
    
    LoaderAnimation(barRef.current)
  }, {
    scope: containerRef
  })

  if (!loading) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
        <span
          ref={barRef}
          className="h-3 w-52 overflow-hidden rounded-lg border-primary-blue bg-transparent shadow-blue"
        />
    </div>
  )
}

export default Loader
