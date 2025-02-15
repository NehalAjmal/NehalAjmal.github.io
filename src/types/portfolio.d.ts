import { Social, Tech, Project } from '@typess/types'

declare module '@portfolio' {
  export const socials: Social[]
  export const name: string
  export const role: string
  export const about: string[]
  export const techs: Tech[]
  export const projects: Project[]
}