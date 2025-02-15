'use client'

import { memo, useCallback } from 'react'
import dynamic from 'next/dynamic'

const IconCard = dynamic(() => import('@components/layout/IconCard'), { ssr: false })

import { Social } from '@typess/types'

interface ApresentationContentProps {
  about: string[];
  socials: Social[];
}

function ApresentationContent({ about, socials }: ApresentationContentProps) {
  const openSocial = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  return (
    <div className="flex size-full w-fit flex-col items-center justify-between gap-10 px-0 py-5 sm:px-7">
      <span className="flex w-full max-w-[400px] flex-col gap-5">
        {about.map((paragraph, idx) => (
          <p key={idx} className="text-xs font-light text-900 sm:text-sm md:text-base">
            {paragraph}
          </p>
        ))}
      </span>
      <span className="flex w-full select-none justify-end gap-2">
        {socials.map((social) => (
          <IconCard
            key={social.name}
            name={social.name}
            icon={social.icon}
            onClick={() => openSocial(social.url)}
            small
          />
        ))}
      </span>
    </div>
  )
}

export default memo(ApresentationContent)