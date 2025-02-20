'use client'

import { createPortal } from 'react-dom'
import { useRef, useEffect, memo } from 'react'
import { useGSAP } from '@gsap/react'
import { useLenis } from '@studio-freight/react-lenis'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { X } from 'lucide-react'

const ProjectContent = dynamic(() => import('./Content'), { ssr: false })
import { ProjectAnimation } from './Animations'
import { Project as ProjectType } from '@typess/types'

interface ProjectProps {
  project: ProjectType
  closeProject: () => void
}

function Project({ closeProject, project }: ProjectProps) {
  const lenis = useLenis()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lenis) {
      lenis.stop()
    }
    return () => {
      if (lenis) {
        lenis.start()
      }
    }
  }, [lenis])

  useGSAP(() => {
    if (!containerRef.current) return
    ProjectAnimation(containerRef.current)
  }, {
    scope: containerRef,
  })

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-2 z-50 flex items-center justify-between gap-2 overflow-hidden rounded-xl bg-100 p-2 shadow-shadow sm:inset-3 sm:p-3 md:inset-4 md:p-4 lg:inset-5 lg:p-5"
    >
      <span
        onClick={closeProject}
        className="absolute right-2.5 top-2.5 max-h-7 max-w-7 cursor-pointer transition-all duration-300 ease-out hover:opacity-65 hover:scale-125"
      >
        <X className="size-full text-error" />
      </span>

      <span className="flex size-full flex-col items-center justify-between gap-4 overflow-scroll p-2 sm:gap-6 sm: p-3 md:flex-row md:gap-8 md:p-4 lg:gap-10 lg:p-5">
        <ProjectContent project={project} />
        <div className="relative flex flex-1 select-none items-center justify-center overflow-hidden rounded-xl object-cover shadow-shadow">
          <Image
            src={`/projects/${project.image}`}
            alt={`Background preview banner showcasing the ${project.title} project`}
            style={{ objectFit: 'cover' }}
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </span>
    </div>,
    document.body
  )
}

export default memo(Project)
