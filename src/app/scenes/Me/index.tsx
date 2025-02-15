'use client'

import { useCallback, useState, useRef, memo } from 'react'
import { useGSAP } from '@gsap/react'
import dynamic from 'next/dynamic'

import { Social } from '@typess/types'

const TagText = dynamic(() => import('@components/layout/TagText'))
const Apresentation = dynamic(() => import('@components/@me/Apresentation'))
const Gallery = dynamic(() => import('@components/@me/Gallery'))

import portfolio from '@portfolio'

function MeScene() {
  const { name, about, socials } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const [ isGalleryOpen, setIsGalleryOpen ] = useState<boolean>(false)

  const handleGallery = useCallback(() => {
    setIsGalleryOpen(prev => !prev)
  }, [])

  useGSAP(() => {
    const loadAnimation = async () => {
      if (!containerRef.current || !titleRef.current) return

      const { ScrollAnimation } = await import('./Animation')
      ScrollAnimation(containerRef.current, titleRef.current)
    }

    loadAnimation()
  }, {
    scope: containerRef,
  })

  return (
    <>
      <section
        ref={containerRef}
        className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
      >
        <TagText ref={titleRef}>me</TagText>

        <div className="mt-10 flex w-full gap-10">
          <Apresentation
            name={name}
            about={about}
            socials={socials as Social[]}
            handleGallery={handleGallery}
          />
        </div>
      </section>

      {isGalleryOpen && (
        <Gallery handleGallery={handleGallery} />
      )}
    </>
  )
}

export default memo(MeScene)
