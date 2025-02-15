import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export const ImageHover = () => {
  const scrollTrigger = ScrollTrigger.getById('me-image-trigger')
  if (scrollTrigger) scrollTrigger.getTween().pause()

  gsap.to('#me-image', { scale: 1.1 })
}

export const ImageHoverOut = () => {
  const scrollTrigger = ScrollTrigger.getById('me-image-trigger')
  if (scrollTrigger) scrollTrigger.getTween().resume()
}