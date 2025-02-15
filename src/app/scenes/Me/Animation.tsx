import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement) => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: container,
    start: '-110% 40%',
    end: '110%% 60%',
    scrub: 1.6,
    markers: false,
  }

  gsap.fromTo(
    title,
    { x: '40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#me-modal',
    { x: '25%', scale: 1.1 },
    {
      x: 0,
      scale: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#me-image',
    { scale: 1.12 },
    {
      scale: 1,
      scrollTrigger: {
        ...triggerSection,
        id: 'me-image-trigger'
      },
    }
  )
}