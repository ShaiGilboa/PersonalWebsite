import React from "react"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title, link, script }) {
  const metaDescription = description || "Personal Website"

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={"Shai Gilboa"}
      titleTemplate={`%s | Shai Gilboa`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: "Shai Gilboa",
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
          content: "Shai Gilboa",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  link: [],
  script: []
}

export default SEO
