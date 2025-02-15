import { memo } from 'react'

interface ProjectNoteProps {
  note: string | null;
}

function ProjectNote ({ note }: ProjectNoteProps) {
  if (!note) return

  return (
    <span className="flex gap-1 md:gap-1.5 lg:gap-2">
      <p className="select-none text-xs font-medium text-500 sm:text-sm">Note:</p>
      <p  className="text-xs italic text-800 sm:text-sm">{note}</p>
    </span>
  )
}

export default memo(ProjectNote)