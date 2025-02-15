import { Date } from '@typess/types'
import { memo } from 'react'

interface ProjectDateProps {
  date: Date | null;
}

function ProjectDate ({ date }: ProjectDateProps) {
  if (!date) return

  const { from, to } = date

  if (from && to ) return (
    <span className="my-2 flex items-center gap-1 sm:my-3 md:my-4 md:gap-1.5 lg:gap-2">
      <p className="text-[10px] text-600 sm:text-xs">{from}</p>
      <span className="h-0.5 w-3 rounded-full bg-400"></span>
      <p className="text-[10px] text-600 sm:text-xs">{to}</p>
    </span>
  )

  if (!to && from) return (
    <span className="my-2 flex items-center gap-1 sm:my-3 md:my-4 md:gap-1.5 lg:gap-2">
      <p className="text-[10px] text-600 sm:text-xs">{from}</p>
    </span>
  )

  return to && (
    <span className="my-2 flex items-center gap-1 sm:my-3 md:my-4 md:gap-1.5 lg:gap-2">
      <p className="text-[10px] text-600 sm:text-xs">{to}</p>
    </span>
  )
}

export default memo(ProjectDate)