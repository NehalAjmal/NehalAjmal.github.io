import Link from 'next/link'

import { Eye, GitBranch } from 'lucide-react'

import { Demo } from '@typess/types'
import { memo } from 'react'

interface ProjectDemoProps {
  demo: Demo | null;
}

function ProjectDemo ({ demo }: ProjectDemoProps) {
  if (!demo) return

  const { repository, preview } = demo

  if (!repository && !preview) return

  if (repository && preview ) return (
    <span className="flex select-none items-center gap-3 md:gap-3.5 lg:gap-4">
      <Link target='_blank' href={preview} className='flex items-center gap-2 text-700 transition-colors duration-300 ease-out hover:text-900 hover:scale-95'>
        <Eye className='size-4' />
        <p className="text-xs leading-3 sm:text-sm">Watch demo</p>
      </Link>

      <Link target='_blank' href={repository} className='flex items-center gap-2 text-700 transition-colors duration-300 ease-out hover:text-900 hover:scale-95'>
        <GitBranch className='size-4 ' />
        <p className="text-xs leading-3 sm:text-sm">Repository</p>
      </Link>
          
    </span>
  )

  if (!preview && repository) return (
    <span className="flex select-none items-center gap-3 md:gap-3.5 lg:gap-4">
      <Link target='_blank' href={repository} className='flex items-center gap-2 text-700 transition-colors duration-300 ease-out hover:text-900 hover:scale-95'>
        <GitBranch className='size-4 ' />
        <p className="text-xs leading-3 sm:text-sm">Repository</p>
      </Link>
    </span>
  )

  return preview && (
    <span className="flex select-none items-center gap-3 md:gap-3.5 lg:gap-4">
      <Link target='_blank' href={preview} className='flex items-center gap-2 text-700 transition-colors duration-300 ease-out hover:text-900 hover:scale-95'>
        <Eye className='size-4' />
        <p className="text-xs leading-3 sm:text-sm">Watch demo</p>
      </Link>
    </span>
  )
}

export default memo(ProjectDemo)