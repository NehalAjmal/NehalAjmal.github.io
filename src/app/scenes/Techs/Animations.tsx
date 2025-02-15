import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement, techs: HTMLDivElement) => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: container,
    start: '-20% 40%',
    end: '110% 60%',
    scrub: 1.6,
    markers: false,
  }

  const containerWidth = techs.scrollWidth
  const viewportWidth = window.innerWidth

  const maxScroll = containerWidth - viewportWidth

  gsap.fromTo(
    title,
    { x: '-40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(techs,
    { x: '-17%' },
    {
      x: () => -maxScroll - techs.offsetLeft,
      scrollTrigger: {
        trigger: container,
        start: '-30% 40%',
        end: '150% 60%',
        scrub: 3,
        markers: false,
      },
    }
  )
    
}
