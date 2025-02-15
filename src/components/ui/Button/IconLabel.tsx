import { ReactElement, cloneElement, memo } from 'react'

interface IconLabelProps {
  children: ReactElement;
}

function IconLabel ({ children }: IconLabelProps) {
  return (
    <span className={'flex items-center justify-center'}>
      {
        cloneElement(children, {
          className: 'size-4 sm:size-5',
        })
      }
    </span>
  )
}

export default memo(IconLabel)