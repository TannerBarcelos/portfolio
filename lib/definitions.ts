type TestimonialDataType = {
  name: string
  position: string
  recommendation: string
  linkedin: string
}
export interface TestimonialProps {
  data: TestimonialDataType
}

type IconType = {
  path: string
  name: string
}
export interface TechItemProps {
  icon: IconType
}

type TechnologiesType = Array<string>
type Project = {
  id: string
  title: string
  link: string
  code_link: string
  technologies: TechnologiesType
  imageName: string
  btnText: string
  underConstruction: boolean
}
export interface ProjectProps {
  project: Project
}

type ThemedImgType = {
  dark: string
  light: string
}
export interface ImageMapType {
  [imgName: string]: ThemedImgType
}

export type IconArray = Array<IconType>

export type LinkType = {
  url: string
  name: string
}
