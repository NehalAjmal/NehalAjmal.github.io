'use client'

import { useCallback, MouseEvent, memo } from 'react'
import dynamic from 'next/dynamic'

const ProjectPreview = dynamic(() => import('./PreviewCard'), { ssr: false })
const ProjectInfos = dynamic(() => import('./InfosCard'), { ssr: false })
import { onHover, onHoverOut } from './Animations'

import { Project } from '@typess/types'

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleHover = useCallback((e: MouseEvent<HTMLDivElement>) => onHover(e), [])
  const handleHoverOut = useCallback((e: MouseEvent<HTMLDivElement>) => onHoverOut(e), [])

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="project-card relative size-[300px] flex-none [perspective:2000px] [transform-style:preserve-3d] [transform:translateX(50px)_translateY(20px)_translateZ(-10px)] 
        before:pointer-events-none before:absolute before:-inset-2 
        before:rounded-xl before:border before:border-gray-500 before:content-[''] 
        before:[transform:translateZ(-20px)] hover:cursor-not-allowed 
        md:size-[350px] lg:size-[400px]"
    >
      <div className="absolute inset-0 size-full rounded-xl shadow-shadow [transform-style:preserve-3d]">
        <div className="absolute inset-0 backface-hidden">
          <ProjectPreview
            title={project.title}
            description={project.description[0]}
            imageName={project.image}
          />
        </div>

        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
          <ProjectInfos
            title={project.title}
            description={project.description}
            techs={project.techs}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectCard)
