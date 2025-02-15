'use client'

import { memo } from 'react'
import Image from 'next/image'

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageName: string;
}

function ProjectPreview({ title, description, imageName }: ProjectPreviewProps) {
  return (
    <div className="relative size-full overflow-hidden rounded-xl shadow-shadow">
      <Image
        src={`/projects/${imageName}`}
        alt={`Background preview banner showcasing the ${title} project`}
        className="size-full select-none text-center text-base text-900"
        style={{ objectFit: 'cover' }}
        layout="responsive"
        width={500}
        height={500}
      />
      <div className="absolute bottom-8 z-10 flex w-full flex-col gap-3 px-5">
        <h2 className="text-sm font-medium text-900 sm:text-base md:text-md">{title}</h2>
        <p className="max-w-full truncate text-xs text-700 sm:text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 from-30% to-black/5" />
    </div>
  )
}

export default memo(ProjectPreview)
