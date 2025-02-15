import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement) => {
  gsap.fromTo(
    container,
    { y: 100, opacity: 0.4, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: container,
        start: '-100% 90%',
        end: '50% bottom',
        scrub: 1.6,
        markers: false,
      },
    }
  )
}