import React, { useEffect } from 'react'

export const UCTransformation = ({
  uuid,
  cdn = 'https://ucarecdn.com/',
  filename,
  classname,
  ...props
}) => {
  const [url, setUrl] = React.useState('')

  // Set URL on initiazation
  useEffect(() => {
    setUrl(`${cdn}${uuid}`)
  }, [uuid, cdn])

  const generateUrl = () => {
    let newUrl = url
    for (const [key, value] of Object.entries(props)) {
      // Preview
      if (key === 'preview') {
        newUrl = `${newUrl}/-/preview/${value.width}x${value.height}`
      }

      // Set fill
      if (key === 'setFill') {
        newUrl = `${newUrl}/-/setfill/${value.color}`
      }

      // Sharpen
      if (key === 'sharpen') {
        newUrl = `${newUrl}/-/sharp/${value}`
      }

      // Smart resize
      if (key === 'smartResize') {
        newUrl = `${newUrl}/-/smart_resize/${value.width}x${value.height}`
      }

      // Zoom objects
      if (key === 'zoomObjects') {
        newUrl = `${newUrl}/-/zoom_objects/${value}`
      }
    }

    if (filename) {
      return `${newUrl}/${filename}`
    }

    return `${newUrl}/`
  }

  return <img src={generateUrl()} className={classname} />
}
