import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const SEO = (props) => {
  const { isBlogPost, path, title, image } = props;
  const siteTitle = "Mari Leach";
  const siteUrl = "https://www.marileach.co.uk";
  const siteDescription = "Mari Leach is a freelance graphic designer based in London, working across a range of mediums from video to print."
  const pageTitle = `${title} | ${siteTitle}`
  const imageUrl = image.substring(2)

  return (
      <Helmet title={title}>
      {/* General tags */}
      <html lang='en-gb' />
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl + withPrefix(path)} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${siteUrl}${props.path}`} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`https://${imageUrl}`} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteTitle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`https://${imageUrl}`} />
    </Helmet>
  )
}

export default SEO
