import { FixedObject, FluidObject } from 'gatsby-image';
type metaInstance  = ({ name: string; content: string; property?: undefined; } | { property: string; content: string; name?: undefined; })

export interface seoProps {
  description?: string,
  lang?: string,
  meta?: metaInstance[],
  link?: string[],
  script?: string[],
  title?: string,
} 

export interface TechLink {
  title: string,
  link: string,
  logo: undefined | {
    fluid?: FluidObject | FluidObject[] ,
    fixed?: FixedObject | FixedObject[],
  }
}