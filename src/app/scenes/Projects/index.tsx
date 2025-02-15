'use client'

import { useState, useCallback, useRef, memo } from 'react'
import { useGSAP } from '@gsap/react'

import dynamic from 'next/dynamic'

const TagText = dynamic(() => import('@components/layout/TagText'))
const ProjectCard = dynamic(() => import('@components/@projects/Card'))
const Project = dynamic(() => import('@components/@projects/Project'))
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'
import { Project as ProjectType } from '@typess/types'

function ProjectsScene() {
  const { projects } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const [ selectedProject, setSelectedProject ] = useState<ProjectType | null>(null)

  const openProject = useCallback((project: ProjectType) => {
    setSelectedProject(project)
  }, [])

  const closeProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current || !projectsRef.current) return

    ScrollAnimation(containerRef.current, titleRef.current)
  }, {
    scope: containerRef
  })

  return (
    <section
      ref={containerRef}
      className='relative flex min-h-dvh w-full flex-col items-end justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48'
    >
      <TagText ref={titleRef}>projects</TagText>

      <div ref={projectsRef} className="flex w-full justify-start gap-12 -translate-x-5 sm:gap-24 md:gap-32 lg:gap-40">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p as ProjectType} onClick={() => openProject(p as ProjectType)} />
        ))}
      </div>

      {selectedProject && (
        <Project project={selectedProject} closeProject={closeProject} />
      )}
    </section>
  )
}

export default memo(ProjectsScene)
