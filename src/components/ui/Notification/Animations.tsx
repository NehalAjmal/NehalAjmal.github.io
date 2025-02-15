import gsap from 'gsap'

export const openNotification = (container: HTMLDivElement) => {
  gsap.fromTo(
    container,
    { x: '20%', opacity: 0.4 },
    {
      x: 0, opacity: 1, duration: 0.8
    }
  )
}