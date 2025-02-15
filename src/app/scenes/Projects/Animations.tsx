import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement) => {

  gsap.fromTo(
    title,
    { x: '-30%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: '-110% 40%',
        end: '110% 60%',
        scrub: 1.6,
        markers: false,
      }
    }
  )

  const cards = gsap.utils.toArray('.project-card') as HTMLElement[]

  const totalWidth = Array.from(cards).reduce(
    (acc, card) => acc + card.offsetWidth + 20,
    0
  )

  gsap.set(cards, { rotateY: -40, x: 10, rotateZ: 2 })

  gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${totalWidth + window.innerHeight}`,
      pin: true,
      snap: 1 / (cards.length - 1),
      scrub: 1.6,
      markers: false,
      anticipatePin: 0.2,
      id: 'project-cards-trigger',
    },
  })

  // const timeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container,
  //     start: 'top top',
  //     end: () => `+=${totalWidth + window.innerHeight}`,
  //     scrub: 1.6,
  //     markers: false,
  //   },
  // })

  // timeline
  //   .to(cards, { rotateY: 0, rotateX: 0, rotateZ: 0 })
  //   .to(cards, { rotateY: 45, rotateX: 20, rotateZ: 10  })
}
