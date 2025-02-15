import { ReactElement, cloneElement, memo } from 'react'

interface IconLabelProps {
  children: ReactElement;
  area: boolean;
}

function IconLabel ({ children, area }: IconLabelProps) {
  return (
    <span className={`flex items-center justify-center ${area ? 'pt-1.5 sm:pt-1' : 'p-0'}`}>
      {cloneElement(children, {
          className: 'text-600 size-3.5 sm:size-5',
      })}
    </span>
  )
}

export default memo(IconLabel)