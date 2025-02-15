'use client'

import { createPortal } from 'react-dom'
import { useRef, memo } from 'react'
import { useGSAP } from '@gsap/react'

import { CircleAlert, CircleCheckBig } from 'lucide-react'
import { openNotification } from './Animations'

interface NotificationProps {
  message: string;
  error: boolean;
  onClose: () => void;
}

function Notification({ message, error, onClose }: NotificationProps) {

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    
    openNotification(containerRef.current)
  }, {
    scope: containerRef
  })

  return createPortal(
    <div
      id='notification'
      className="pointer-events-none fixed inset-0 z-50 flex items-start justify-end bg-transparent p-10"
      onClick={onClose}
    >
      <div
        className={`flex items-center gap-2.5 rounded-lg border border-transparent bg-100 p-6 text-center shadow-shadow ${
          error ? 'border-l-error' : 'border-l-green'
        }`}
        onClick={(e) => e.stopPropagation()}
      > 
        {error ? (
          <CircleAlert className='size-5 text-error sm:size-6 md:size-7' />
        ) : (
          <CircleCheckBig className='size-5 text-green sm:size-6 md:size-7' />
        )}
        <p className={'text-xs font-medium text-800 sm:text-sm'}>{message}</p>
      </div>
    </div>,
    document.body
  )
}

export default memo(Notification)
