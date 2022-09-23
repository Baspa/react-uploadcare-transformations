import * as React from 'react'
import { transformationFinder } from './utils/transformations'

interface Props {
  uuid: string
  cdn?: string
  filename: any
  classname: any
  [key: string]: any
}

export const UCImage = ({
  uuid,
  cdn = 'https://ucarecdn.com/',
  filename,
  classname,
  ...props
}: Props) => {

  function generateUrl() {
    let ucUrl = `${cdn}${uuid}/`

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