'use client'

import { ButtonHTMLAttributes, ReactElement, useCallback, useState, memo } from 'react'
import dynamic from 'next/dynamic'

import { Loader } from 'lucide-react'
const IconLabel = dynamic(() => import('./IconLabel'), { ssr: false })

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading: boolean;
  icon: ReactElement;
}

function Button({ icon, label, disabled, isLoading, ...props }: ButtonProps) {
  const [ effect, setEffect ] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    if (disabled || isLoading) return
    setEffect(true)
  }, [ disabled, isLoading ])

  const handleAnimationEnd = () => setEffect(false)

  return (
    <button
      disabled={disabled || isLoading}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      className={`
        flex w-fit items-center justify-center gap-2 rounded-lg px-7 py-[5px] shadow-little transition-all duration-300 ease-out
        ${effect && !disabled || !isLoading && 'animate-clicked'} 
        ${disabled ? 'cursor-not-allowed bg-300 text-700' : ''} 
        ${isLoading && !disabled ? 'cursor-wait bg-primary-blue text-900' : ''} 
        ${!isLoading && !disabled ? 'cursor-pointer bg-primary-blue text-950 hover:bg-700 hover:text-50 hover:scale-90' : ''}
      `}
      {...props}
    >
      {isLoading ? (
        <Loader className="animate-spin" />
      ) : disabled ? (
        <p className="select-none text-xs font-medium leading-5 sm:text-sm md:text-base">Sent</p>
      ) : (
        <>
          <p className="select-none text-xs font-medium leading-5 sm:text-sm md:text-base">{label}</p>
          <IconLabel>{icon}</IconLabel>
        </>
      )}
    </button>
  )
}

export default memo(Button)
