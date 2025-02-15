import { memo } from 'react'

interface ProjectFeaturesProps {
  features: string[] | null
}

function ProjectFeatures ({ features }: ProjectFeaturesProps) {

  if (!features || features.length <= 0) return

  return (
    <span className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
      <p className="select-none text-xs font-medium text-500 sm:text-sm">Features:</p>
      <ul className="flex list-none flex-col gap-1.5 hover:list-disc">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <span className="size-0.5 rounded-full bg-primary-blue shadow-little sm:size-1"></span>
            <p className="text-xs text-800 sm:text-sm">{feature}</p>
          </li>
        ))}
      </ul>
    </span>
  )
}

export default memo(ProjectFeatures)