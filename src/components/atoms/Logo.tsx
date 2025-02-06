import { LogoProps } from '../../types/components/Logo'
import GeniusImage from './GeniusImage'

const Logo = (props: LogoProps) => {
  return (
    <GeniusImage
      src={props.src || '/images/logo.png'}
      alt={props.alt || 'App Logo'}
      {...props}
    />
  )
}

export default Logo
