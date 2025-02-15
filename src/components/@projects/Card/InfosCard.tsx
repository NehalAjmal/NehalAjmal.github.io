'use client'

import { memo } from 'react'
import dynamic from 'next/dynamic'

const IconCard = dynamic(() => import('@components/layout/IconCard'), { ssr: false })

import { Tech } from '@typess/types'

interface ProjectInfosProps {
  title: string;
  description: string[];
  techs: Tech[];
}

function ProjectInfos({ title, description, techs }: ProjectInfosProps) {
  const techsPreviewCount = 3
  const remainingTechs = techs.length - techsPreviewCount

  return (
    <div className="flex size-full max-h-[400px] max-w-[400px] flex-col justify-between gap-5 overflow-hidden rounded-xl bg-100 px-5 py-8 shadow-shadow">
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-900 underline decoration-primary-blue sm:text-base md:text-md">
          {title}
        </h2>
        <span className="flex flex-col gap-4">
          {description.map((desc, idx) => (
            <p key={idx} className="text-xs text-700 sm:text-sm">{desc}</p>
          ))}
        </span>
      </div>

      <div className="flex w-full items-center justify-end gap-1 sm:gap-1.5 md:gap-2">
        {techs.slice(0, techsPreviewCount).map((tech) => (
          <IconCard key={tech.name} icon={tech.icon} name={tech.name} small />
        ))}
        {remainingTechs > 0 && (
          <p className="text-xs text-700 sm:text-sm">+ {remainingTechs}</p>
        )}
      </div>
    </div>
  )
}

export default memo(ProjectInfos)