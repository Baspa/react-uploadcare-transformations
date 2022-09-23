export function autoRotate(url: string, value: boolean) {
  return `${url}/-/autorotate/${value ? 'yes' : 'no'}`
}

export function blurFaces(url: string, value: number) {
  return `${url}/-/blur_region/faces/${value}`
}

export function enhance(url: string, value: number) {
  return `${url}/-/enhance/${value}`
}

export function flip(url: string) {
  return `${url}/-/flip`
}

export function format(url: string, value: string) {
  return `${url}/-/format/${value}`
}

export function grayscale(url: string) {
  return `${url}/-/grayscale`
}

export function invert(url: string) {
  return `${url}/-/invert`
}

export function mirror(url: string) {
  return `${url}/-/mirror`
}

export function preview(url: string, values: { width: number; height: number }) {
  return `${url}/-/preview/${values.width}x${values.height}`
}

export function progressive(url: string, value: any) {
  return `${url}/-/progressive/${value ? 'yes' : 'no'}`
}

export function quality(url: string, value: string) {
  return `${url}/-/quality/${value}`
}

export function rotate(url: string, value: number) {
  return `${url}/-/rotate/${value}`
}

export function setFill(url: string, values: { color: string }) {
  return `${url}/-/setfill/${values.color}`
}

export function sharpen(url: string, values: number) {
  return `${url}/-/sharp/${values}`
}

export function smartResize(url: string, values: { width: number; height: number }) {
  return `${url}/-/smart_resize/${values.width}x${values.height}`
}

export function zoomObjects(url: string, values: number) {
  return `${url}/-/zoom_objects/${values}`
}

export function transformationFinder(transformation: string) {
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
