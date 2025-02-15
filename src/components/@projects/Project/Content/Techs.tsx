import { memo } from 'react'
import dynamic from 'next/dynamic'

import { Tech } from '@typess/types'

const IconCard = dynamic(() => import('@components/layout/IconCard'))

interface ProjectTechsProps {
  techs: Tech[] | null
}

function ProjectTechs ({ techs }: ProjectTechsProps) {
  if (!techs || techs.length <= 0) return

  return (
    <span className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
      <p className="select-none text-xs font-medium text-500 sm:text-sm">Techs:</p>
      <div className="flex flex-wrap items-center justify-start gap-1.5 opacity-70">
        {techs.map((tech, index) => (
          <IconCard key={index} icon={tech.icon} name={tech.name} small />
        ))}
      </div>
    </span>
  )
}

export default memo(ProjectTechs)