'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Lenis } from '@studio-freight/react-lenis'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import HeroScene from '@scenes/Hero'
import ProjectsScene from '@scenes/Projects'
import MeScene from '@scenes/Me'
import TechsScene from '@scenes/Techs'
import QuoteScene from '@scenes/Quote'
import TalkScene from '@scenes/Talk'
import FooterScene from '@scenes/Footer'

export default function Home() {
  const [ isClient, setIsClient ] = useState(false)
 
  useEffect(() => {
    setIsClient(true)

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

  }, [])

  return isClient && (
    <Lenis root>
      <main className="min-h-screen w-full">
        <HeroScene />
        <ProjectsScene />
        <MeScene />
        <TechsScene />
        <QuoteScene />
        <TalkScene />
        <FooterScene />
      </main>
    </Lenis >
  )
}
