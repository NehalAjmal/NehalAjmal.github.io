'use client'

import { memo } from 'react'
import dynamic from 'next/dynamic'

import { SimpleIconName } from '@typess/types'

const Icon = dynamic(() => import('@components/Icon'))

interface IconButtonProps {
  icon: SimpleIconName;
  onClick: () => void;
}

function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-100 p-1.5 text-800 shadow-little transition-all duration-300 ease-out hover:bg-800 hover:text-200 hover:scale-75 sm:size-9 md:size-10 md:p-2"
    >
      <Icon name={icon} className="size-full " />
    </div>
  )
}

export default memo(IconButton)
