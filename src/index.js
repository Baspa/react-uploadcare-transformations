import React, { useEffect } from 'react'
import styles from './styles.module.css'

export const UCTransformation = ({
  uuid,
  cdn = 'https://ucarecdn.com/',
  filename,
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
      if (key === 'preview') {
        newUrl = `${newUrl}/-/preview/${value.width}x${value.height}/`
      }
    }

    return `${newUrl}`
  }

  return <img src={generateUrl()} className={styles.image} />
}
