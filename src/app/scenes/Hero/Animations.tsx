import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, status: HTMLDivElement, apresentation: HTMLDivElement, role: HTMLDivElement) => {
  gsap.fromTo(
    status,
    { x: 0 },
    {
      x: '5%',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  gsap.fromTo(
    apresentation,
    { x: 0 },
    {
      x: '10%',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '110% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  gsap.fromTo(
    role,
    { x: 0 },
    {
      x: '15%',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '120% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )
}