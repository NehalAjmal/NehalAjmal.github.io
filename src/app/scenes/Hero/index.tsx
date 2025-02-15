'use client'

import { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import dynamic from 'next/dynamic'

const TagText = dynamic(() => import('@components/layout/TagText'))
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'

function HeroScene() {
  const { name, role } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const apresentationRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const loadAnimation = async () => {
      if (!containerRef.current || !statusRef.current || !apresentationRef.current || !roleRef.current) return

      ScrollAnimation(
        containerRef.current,
        statusRef.current,
        apresentationRef.current,
        roleRef.current
      )
    }

    loadAnimation()
  }, {
    scope: containerRef,
  })

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-dvh w-full select-none flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <div ref={statusRef} className="flex items-center gap-2">
        <span className="size-2 animate-pulse rounded-full bg-green duration-1000"></span>
        <p className="text-xs font-light text-700 sm:text-sm md:text-base">Ready to talk</p>
      </div>

      <h1 ref={apresentationRef} className="text-xl text-950 sm:text-2xl md:text-3xl">
        Hey, I&apos;m{' '}
        <span className="select-text underline decoration-primary-blue">{name}</span>
      </h1>

      <TagText ref={roleRef}>{role}</TagText>
    </section>
  )
}

export default memo(HeroScene)