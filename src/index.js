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
      // Auto rotate
      if (key === 'autoRotate') {
        newUrl = `${newUrl}/-/autorotate/${value ? 'yes' : 'no'}`
      }

      // Blur faces
      if (key === 'blurFaces') {
        newUrl = `${newUrl}/-/blur_region/faces/${value}`
      }

      // Enhance
      if (key === 'enhance') {
        newUrl = `${newUrl}/-/enhance/${value}`
      }

      // Flip
      if (key === 'flip') {
        newUrl = `${newUrl}/-/flip`
      }

      // Format
      if (key === 'format') {
        newUrl = `${newUrl}/-/format/${value}`
      }

      // Gray scale
      if (key === 'grayscale') {
        newUrl = `${newUrl}/-/grayscale`
      }

      // Invert
      if (key === 'invert') {
        newUrl = `${newUrl}/-/invert`
      }

      // Mirror
      if (key === 'mirror') {
        newUrl = `${newUrl}/-/mirror`
      }

      // Progressive
      if (key === 'progressive') {
        newUrl = `${newUrl}/-/progressive/${value ? 'yes' : 'no'}`
      }

      // Quality
      if (key === 'quality') {
        newUrl = `${newUrl}/-/quality/${value}`
      }

      // Rotate
      if (key === 'rotate') {
        newUrl = `${newUrl}/-/rotate/${value}`
      }

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
