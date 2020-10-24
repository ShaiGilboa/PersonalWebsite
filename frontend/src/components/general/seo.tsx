import React, { PropsWithChildren } from "react"
import { Helmet } from "react-helmet"

const SEO : React.FC<PropsWithChildren<seoProps>> = ({ description = '', lang = "en", meta = [], title = 'Shai Gilboa', link = [], script = [] }) => {
  const metaDescription = description || "Personal Website"

  return (<div>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Shai Gilboa`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Shai Gilboa",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
      ].concat(link)}
      script={[
      ].concat(script)}
    />
  </div>
  )
}



export default SEO
