export function autoRotate(url, value) {
  return `${url}/-/autorotate/${value ? 'yes' : 'no'}`
}

export function blurFaces(url, value) {
  return `${url}/-/blur_region/faces/${value}`
}

export function enhance(url, value) {
  return `${url}/-/enhance/${value}`
}

export function flip(url) {
  return `${url}/-/flip`
}

export function format(url, value) {
  return `${url}/-/format/${value}`
}

export function grayscale(url) {
  return `${url}/-/grayscale`
}

export function invert(url) {
  return `${url}/-/invert`
}

export function mirror(url) {
  return `${url}/-/mirror`
}

export function progressive(url, value) {
  return `${url}/-/progressive/${value ? 'yes' : 'no'}`
}

export function quality(url, value) {
  return `${url}/-/quality/${value}`
}

export function rotate(url, value) {
  return `${url}/-/rotate/${value}`
}

export function preview(url, values) {
  return `${url}/-/preview/${values.width}x${values.height}`
}

export function setFill(url, values) {
  return `${url}/-/setfill/${values.color}`
}

export function sharpen(url, values) {
  return `${url}/-/sharp/${values}`
}

export function smartResize(url, values) {
  return `${url}/-/smart_resize/${values.width}x${values.height}`
}

export function zoomObjects(url, values) {
  return `${url}/-/zoom_objects/${values}`
}

export function transformationFinder(transformation) {
  const transformations = {
    autoRotate,
    blurFaces,
    enhance,
    flip,
    format,
    grayscale,
    invert,
    mirror,
    progressive,
    quality,
    rotate,
    preview,
    setFill,
    sharpen,
    smartResize,
    zoomObjects
  }

  return transformations[transformation]
}
