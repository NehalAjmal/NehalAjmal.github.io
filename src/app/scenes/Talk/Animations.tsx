import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement, form: HTMLDivElement) => {
  gsap.fromTo(
    title,
    { x: '40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: '-40% 40%',
        end: '65% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  gsap.fromTo(
    form,
    { x: '30%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: '-30% 40%',
        end: '65% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  const inputName = document.querySelector('#input-name') as HTMLInputElement | null
  const inputEmail = document.querySelector('#input-email') as HTMLInputElement | null
  const inputMessage = document.querySelector('#input-message') as HTMLInputElement | null
  const talkButton = document.querySelector('#talk-button') as HTMLButtonElement | null

  if (!inputName || !inputEmail || !inputMessage || !talkButton) {
    console.warn('One or more targets for GSAP were not found')
    return
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: '-20% 40%',
      end: '65% 80%',
      scrub: 1.6,
      markers: false,
    },
  })

  timeline
    .fromTo(
      inputName,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    )
    .fromTo(
      inputEmail,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
    )
    .fromTo(
      inputMessage,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 },
    )
    .fromTo(
      talkButton,
      {  opacity: 0 },
      {  opacity: 1 },
    )
}