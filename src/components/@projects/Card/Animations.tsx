import { MouseEvent } from 'react'
import gsap from 'gsap'

export const onHover = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget
  if (!card) return

  const tl = gsap.timeline()

  tl.to(card, {
    scale: 1.1,
    duration: 0.1,
  })
  .to(card, {
    rotationY: 180,
    duration: 0.5,
  })
}

export const onHoverOut = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget
  if (!card) return

  const tl = gsap.timeline()

  tl.to(card, {
    scale: 1,
    duration: 0.3,
  })
  .to(card, {
    rotateY: -40,
    rotateX: 10,
    rotateZ: 2,
  })
}