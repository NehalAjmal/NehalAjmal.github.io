/* eslint-disable @next/next/no-img-element */
'use client'

import { memo } from 'react'
import dynamic from 'next/dynamic'

const ApresentationContent = dynamic(() => import('./Content'), { ssr: false })
const ApresentationImage = dynamic(() => import('./Image'), { ssr: false })

import { Social } from '@typess/types'

interface ApresentationProps {
  name: string;
  about: string[];
  socials: Social[];
  handleGallery: () => void;
}

function Apresentation({ name, about, socials, handleGallery }: ApresentationProps) {
  return (
    <div
      id="me-modal"
      className="flex w-fit flex-col items-center justify-between gap-3 rounded-lg bg-100 p-5 shadow-shadow hover:scale-105 min-[820px]:flex-row"
    >
      <ApresentationImage name={name} handleGallery={handleGallery} />
      <ApresentationContent about={about} socials={socials} />
    </div>
  )
}

export default memo(Apresentation)