import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const ScrollAnimation = (container: HTMLDivElement) => {

  ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: '+=100%',
    pin: true,
    markers: false,
    scrub: 1.6,
    anticipatePin: 0.2
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: '+=100%',
      scrub: 1.6,
    },
  })

  timeline
  .fromTo(
    '#quote-icon',
    { x: '80%', opacity: 0.4, filter: 'blur(2px)' },
    { x: 0, opacity: 1, filter: 'blur(0)', duration: 1 }
  )
  .fromTo(
    '#quote-one',
    { scale: 0.5, x: -100, y: -50, opacity: 0.4 },
    { scale: 1, x: 0, y: 0, opacity: 1, duration: 1 },
    '<'
  )
  .fromTo(
    '#quote-two',
    { scale: 0.5, x: 100, y: 50, opacity: 0.4 },
    { scale: 1, x: 0, y: 0, opacity: 1, duration: 1 },
    '<'
  )
  .fromTo(
    '#quote-author',
    { scale: 0.5, y: 50, opacity: 0.4 },
    { scale: 1, y: 0, opacity: 1, duration: 1 },
    '-=0.75'
  )
}