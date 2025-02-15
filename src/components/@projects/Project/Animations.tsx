import gsap from 'gsap'

export const ProjectAnimation = (container: HTMLDivElement) => {
  gsap.fromTo(
    container,
    { scale: 0.2 },
    { scale: 1, }
  )
}