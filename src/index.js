import React, { useEffect } from 'react'
import { transformationFinder } from './transformations'

export const UCImage = ({
  uuid,
  cdn = 'https://ucarecdn.com/',
  filename,
  classname,
  ...props
}) => {
  const [url, setUrl] = React.useState('')

  // Set base URL on initiazation
  useEffect(() => {
    setUrl(`${cdn}${uuid}`)
  }, [uuid, cdn])

  /**
   * Generate URL with transformations
   *
   * @returns {string} - The final URL with all transformations applied
   */
  const generateUrl = () => {
    let ucUrl = url

    // Loop through all props and find the transformation
    for (const [key, value] of Object.entries(props)) {
      // Add transformation to URL
      ucUrl = transformationFinder(key)(ucUrl, value)
    }

    // If filename is provided, add it to the URL
    if (filename) {
      return `${ucUrl}/${filename}`
    }

    return `${ucUrl}/`
  }

  return <img src={generateUrl()} className={classname} />
}
