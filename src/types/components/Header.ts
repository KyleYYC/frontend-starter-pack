import React from 'react'

/**
 * Represents a navigation link item, which can optionally contain sub-links for nested navigation.
 */
export interface NavLink {
  label: string  /** Display label of the navigation link */
  href?: string /** URL path the link navigates to - Made optional to accommodate sub-links without a direct href */
  icon?: React.ReactNode  /** Optional icon to display alongside the label */
  subLinks?: NavLink[]  /** Optional array of sub-links for nested navigation */
}

/** Alignment options for positioning elements within the header */
export type Alignment = 'left' | 'center' | 'right'

/**
 * Props for configuring the Header component.
 */
export interface HeaderProps {
  logo?: React.ReactNode /** Logo element to display, typically an image or SVG */
  title?: React.ReactNode   /** Title text or element to display alongside the logo */
  links?: NavLink[]  /** Array of navigation links to display in the header */
  userMenu?: React.ReactNode  /** User menu element, such as an avatar or dropdown menu */
  onMobileMenuClick?: () => void   /** Callback when the mobile menu button is clicked */
  mobileMenuHeightOption?: 'full' | 'content'  /** Height option for the mobile menu: 'full' screen or 'content' height */
  navLinksPosition?: Alignment  /** Positioning of navigation links: 'left', 'center', or 'right' */
  showLogo?: boolean/** Whether to display the logo */
  showTitle?: boolean/** Whether to display the title */
  logoAlignment?: Alignment  /** Alignment of the logo within the header */
  titleAlignment?: Alignment   /** Alignment of the title within the header */
  additionalContent?: React.ReactNode  /** Additional content to display, such as search input or buttons */
  elevation?: number  /** Elevation (shadow depth) of the AppBar component */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'  /** Positioning type of the AppBar: 'fixed', 'absolute', etc. */
  hideOnScroll?: boolean  /** Whether to hide the header on scroll down and show on scroll up */
  themeColor?: 'primary' | 'secondary' | 'default'  /** Theme color of the AppBar */
  customStyles?: React.CSSProperties  /** Custom CSS styles to apply to the AppBar */
}