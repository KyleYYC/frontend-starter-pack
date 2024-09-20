import React from 'react'

/**
 * Represents a single link or group of links in the footer.
 */
export interface FooterLink {
  label: string /** Display label of the link */
  href?: string /** URL path the link navigates to */
  icon?: React.ReactNode /** Optional icon to display alongside the label */
  subLinks?: FooterLink[] /** Optional array of sub-links for grouping links */
}

/** Alignment options for positioning elements within the footer */
export type Alignment = 'left' | 'center' | 'right'

/**
 * Props for configuring the Footer component.
 */
export interface FooterProps {
  logo?: React.ReactNode /** Logo element to display, typically an image or SVG */
  companyName?: React.ReactNode /** Company name or element to display */
  links?: FooterLink[][] /** Array of link groups to display in the footer */
  socialLinks?: FooterLink[] /** Social media links to display */
  showLogo?: boolean /** Whether to display the logo */
  showCompanyName?: boolean /** Whether to display the company name */
  logoAlignment?: Alignment /** Alignment of the logo within the footer */
  companyNameAlignment?: Alignment /** Alignment of the company name within the footer */
  additionalContent?: React.ReactNode /** Additional content to display, such as newsletter signup */
  elevation?: number /** Elevation (shadow depth) of the Footer */
  position?:
    | 'fixed'
    | 'absolute'
    | 'sticky'
    | 'static'
    | 'relative' /** Positioning type of the Footer */
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'default' /** Theme color of the Footer */
  customStyles?: React.CSSProperties /** Custom CSS styles to apply to the Footer */
  copyrightText?:
    | React.ReactNode
    | string /** Copyright text to display at the bottom */
}
