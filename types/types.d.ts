import type { StaticImageData } from 'next/image'

export interface TestimonialProps {
  data: {
    name: string
    position: string
    recommendation: string
    linkedin: string
  }
}

export interface TechItemProps {
  icon: {
    path: string
    name: string
  }
}

type TechType = string[]

export interface ProjectProps {
  project: {
    id: string
    title: string
    link: string
    code_link: string
    technologies: TechType
    description: string
    image: string
    btnText: string
  }
}

export type IconArray = Array<{
  name: string
  path: string
}>

export type LinkType = {
  url: string
  icon: IconProp | null
  name: string
}
