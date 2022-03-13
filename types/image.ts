export interface ImageProps {
  id: number
  data: {
    attributes: {
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      formats: Formats
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl?: any
      provider: string
      provider_metadata?: any
      createdAt: Date
      updatedAt: Date
    }
  }
}

interface Formats {
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
}

interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
}

interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
}
