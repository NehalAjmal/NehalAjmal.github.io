'use client'

import { memo } from 'react'

import { SimpleIconName } from '@typess/types'

import Icon from '@components/Icon'

interface IconCardProps {
  name: string;
  icon: SimpleIconName;
  onClick?: () => void;
  small?: boolean;
}

function IconCard({ name, icon, onClick, small = false }: IconCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-lg bg-300 text-900 shadow-little transition-all duration-300 ease-out
      ${small ? 'px-2 py-0.5 sm:px-2.5 sm:py-1' : 'px-3 py-1.5 sm:px-4 sm:py-2'}
      ${onClick ? 'cursor-pointer hover:bg-900 hover:text-100 hover:scale-90' : 'cursor-default'}`}
    >
      <Icon
        name={icon}
        className={`${small ? 'size-2.5 md:size-3 lg:size-3.5' : 'size-4 md:size-[18px] lg:size-5'}`}
      />

      <p
        className={`whitespace-nowrap font-medium
        ${small ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}`}
      >
        {name}
      </p>

    </div>
  )
}

export default memo(IconCard)