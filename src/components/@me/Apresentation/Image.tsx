'use client'

import { memo, useCallback } from 'react'

import Image from 'next/image'
import { ImageHover, ImageHoverOut } from './Animations'

interface ApresentationImageProps {
  handleGallery: () => void;
  name: string;
}

function ApresentationImage ({ handleGallery, name }: ApresentationImageProps) {
  const handleImageHover = useCallback(() => {
    ImageHover()
  }, [])

  const handleImageHoverOut = useCallback(() => {
    ImageHoverOut()
  }, [])

  return (
    <div
        id="me-image"
        onClick={handleGallery}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHoverOut}
        className="relative size-full max-h-[300px] max-w-[300px] shrink-0 cursor-pointer select-none overflow-hidden rounded-xl bg-cover bg-center shadow-shadow transition-all duration-300 ease-out hover:shadow-blue md:max-w-[350px]"
      >
        <Image
          src="/me.webp"
          alt={`${name}'s photo presentation. Hi there!`}
          style={{ objectFit: 'cover' }}
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
  )
}

export default memo(ApresentationImage)