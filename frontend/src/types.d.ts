type metaInstance  = ({ name: string; content: string; property?: undefined; } | { property: string; content: string; name?: undefined; })

export interface seoProps {
  description?: string,
  lang?: string,
  meta?: metaInstance[],
  link?: string[],
  script?: string[],
  title?: string,
} 