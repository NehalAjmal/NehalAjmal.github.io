import gsap from 'gsap'

export const LoaderAnimation = (bar: HTMLSpanElement) => {
  gsap.to(bar, {
    background: 'linear-gradient(to right, var(--primary-blue) 0%, var(--primary-blue) 0%, transparent 0%)',
    duration: 1,
    ease: 'linear',
    onUpdate: function () {
      const progress = this.progress() * 100
      bar.style.background = `linear-gradient(to right, var(--primary-blue) ${progress}%, var(--primary-blue) ${progress}%, transparent ${progress}%)`
    },
  })
}