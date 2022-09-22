import React, { useEffect } from 'react'
import styles from './styles.module.css'

export const UCTransformation = ({
  uuid,
  cdn = 'https://ucarecdn.com/',
  ...props
}) => {
  const [url, setUrl] = React.useState('')

  // Set URL on initiazation
  useEffect(() => {
    setUrl(`${cdn}${uuid}`)
  }, [uuid, cdn])

  console.log(props)

  const generateUrl = () => {
    return `${url}/-/resize/300x`
  }

  // protected string $uuid;
  // protected array $transformations = [];
  // protected string $url;
  // protected string $baseUrl;
  // protected ?string $filename = null;

  // public function __construct(string $uuid, string $cdnUrl = 'https://ucarecdn.com/')
  // {
  //     $this->uuid = $uuid;
  //     $this->baseUrl = $cdnUrl;
  // }

  // public function filename(string $filename)
  // {
  //     $this->filename = $filename;

  //     return $this;
  // }

  // public function getUrl(): string
  // {
  //     $url = $this->applyTransformations($this->baseUrl . $this->uuid . '/');

  //     // Check if url contains one of the following strings: 'blur_region', 'enhance', 'filter', 'zoom_objects'
  //     // because these transformations won't work if they do not contain the preview transformation as well.
  //     if (str_contains($url, 'blur_region') ||
  //         str_contains($url, 'enhance') ||
  //         str_contains($url, 'filter') ||
  //         str_contains($url, 'zoom_objects')
  //     ) {
  //         // Check if url contains 'resize', 'scale_crop' or 'preview'. If not add, add 'preview' to the url.
  //         // By using 'preview' the image will not be changed and produce the biggest possible image.
  //         if (! str_contains($url, 'preview') ||
  //             ! str_contains($url, 'scale_crop') ||
  //             ! str_contains($url, 'resize')) {
  //             $url .= '-/preview/';
  //         }
  //     }

  //     if (! str_ends_with($url, '/')) {
  //         $url .= '/';
  //     }

  //     if ($this->filename) {
  //         $url = rtrim($url, '/') . '/' . $this->filename;
  //     }

  //     return $url;
  // }

  return <img src={generateUrl()} className={styles.image} />
}
