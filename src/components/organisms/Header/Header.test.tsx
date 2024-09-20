import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { NavLink } from '../../../types/components/Header'
import '@testing-library/jest-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'

jest.mock('@mui/material/useMediaQuery')
jest.mock('@mui/material/useScrollTrigger')
jest.mock('@mui/material/Slide')

describe('Header Component', () => {
  const useMediaQueryMock = useMediaQuery as jest.Mock
  const useScrollTriggerMock = useScrollTrigger as jest.Mock

  const defaultLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]

  /**
   * Array of navigation links used for testing.
   * Some links include sub-links for testing nested navigation behavior.
   *
   * @type {NavLink[]}
   * @property {string} label - The label for the main navigation link.
   * @property {NavLink[]} [subLinks] - Optional sub-links under the main link.
   */
  const linksWithSubLinks: NavLink[] = [
    {
      label: 'Services',
      subLinks: [
        { label: 'Consulting', href: '/consulting' },
        { label: 'Development', href: '/development' },
      ],
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Desktop View', () => {
    beforeEach(() => {
      useMediaQueryMock.mockImplementation(() => false)
    })

    test('renders Header with default props', () => {
      render(<Header />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    test('renders logo and title when provided', () => {
      const logo = <img src='logo.png' alt='Logo' />
      const title = 'Test Title'
      render(<Header logo={logo} title={title} />)
      expect(screen.getByAltText('Logo')).toBeInTheDocument()
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    test('renders navigation links', () => {
      render(<Header links={defaultLinks} />)
      const homeLinks = screen.getAllByText('Home')
      expect(homeLinks.length).toBeGreaterThan(0)
      const aboutLinks = screen.getAllByText('About')
      expect(aboutLinks.length).toBeGreaterThan(0)
    })

    test('renders userMenu when provided', () => {
      const userMenu = <div>User Menu</div>
      render(<Header userMenu={userMenu} />)
      expect(screen.getByText('User Menu')).toBeInTheDocument()
    })

    test('opens sub-menu when navigation link with subLinks is clicked', () => {
      render(<Header links={linksWithSubLinks} />)
      const servicesLink = screen.getAllByText('Services')[0]
      fireEvent.click(servicesLink)
      expect(screen.getByText('Consulting')).toBeInTheDocument()
      expect(screen.getByText('Development')).toBeInTheDocument()
    })

    test('applies custom styles to the AppBar', () => {
      const customStyles = { backgroundColor: 'red' }
      render(<Header customStyles={customStyles} />)
      const appBar = screen.getByRole('banner')
      expect(appBar).toHaveStyle('background-color: red')
    })

    test('renders additionalContent when provided', () => {
      const additionalContent = <div>Additional Content</div>
      render(<Header additionalContent={additionalContent} />)
      expect(screen.getByText('Additional Content')).toBeInTheDocument()
    })
  })

  describe('Mobile View', () => {
    beforeEach(() => {
      useMediaQueryMock.mockImplementation(() => true)
    })

    test('renders mobile menu icon', () => {
      render(<Header />)
      expect(screen.getByLabelText('open navigation menu')).toBeInTheDocument()
    })

    test('opens drawer when mobile menu icon is clicked', () => {
      render(<Header links={defaultLinks} />)
      const menuButton = screen.getByLabelText('open navigation menu')
      fireEvent.click(menuButton)
      const presentations = screen.getAllByRole('presentation')
      expect(presentations.length).toBeGreaterThan(0)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    test('calls onMobileMenuClick when mobile menu is opened', () => {
      const onMobileMenuClick = jest.fn()
      render(<Header onMobileMenuClick={onMobileMenuClick} />)
      const menuButton = screen.getByLabelText('open navigation menu')
      fireEvent.click(menuButton)
      expect(onMobileMenuClick).toHaveBeenCalled()
    })

    test('expands sub-links in drawer when link with subLinks is clicked', () => {
      render(<Header links={linksWithSubLinks} />)
      const menuButton = screen.getByLabelText('open navigation menu')
      fireEvent.click(menuButton)
      const servicesLink = screen.getByText('Services')
      fireEvent.click(servicesLink)
      expect(screen.getByText('Consulting')).toBeInTheDocument()
      expect(screen.getByText('Development')).toBeInTheDocument()
    })

    test('drawer navigation links have correct href attributes', () => {
      render(<Header links={linksWithSubLinks} />)
      const menuButton = screen.getByLabelText('open navigation menu')
      fireEvent.click(menuButton)
      const servicesLink = screen.getByText('Services')
      fireEvent.click(servicesLink)
      const consultingLink = screen.getByText('Consulting')
      expect(consultingLink.closest('a')).toHaveAttribute('href', '/consulting')
      const developmentLink = screen.getByText('Development')
      expect(developmentLink.closest('a')).toHaveAttribute(
        'href',
        '/development'
      )
    })
  })

  describe('Hide on Scroll', () => {
    test('shows Header when useScrollTrigger is false and hideOnScroll is true', () => {
      useScrollTriggerMock.mockImplementation(() => false)
      render(<Header hideOnScroll={true} />)
      const appBar = screen.getByRole('banner')
      expect(appBar).toBeInTheDocument()
    })

    test('hides Header when useScrollTrigger is true and hideOnScroll is true', () => {
      useScrollTriggerMock.mockImplementation(() => true)
      render(<Header hideOnScroll={true} />)
      const appBar = screen.queryByRole('banner')
      expect(appBar).not.toBeInTheDocument()
    })
  })
})
