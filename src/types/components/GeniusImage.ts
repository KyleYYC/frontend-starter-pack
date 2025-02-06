export interface GeniusImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  alt: string
  src: string
}
