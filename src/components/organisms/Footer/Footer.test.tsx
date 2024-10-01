import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import '@testing-library/jest-dom'
import useMediaQuery from '@mui/material/useMediaQuery'

jest.mock('@mui/material/useMediaQuery')

describe('Footer Component', () => {
  const useMediaQueryMock = useMediaQuery as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders Footer with default props', () => {
    render(<Footer />)
  })

  test('renders logo and company name when provided', () => {
    const logo = <img src='logo.png' alt='Logo' />
    const companyName = 'Test Company'
    render(<Footer logo={logo} companyName={companyName} />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Test Company')).toBeInTheDocument()
  })

  test('renders footer links', () => {
    const footerLinks = [
      [
        { label: 'Company' },
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    ]
    render(<Footer links={footerLinks} />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
  })

  test('renders social media links', () => {
    const socialLinks = [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com',
        icon: <svg data-testid='facebook-icon' />,
      },
    ]
    render(<Footer socialLinks={socialLinks} />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument()
  })

  test('renders additional content when provided', () => {
    const additionalContent = <div>Additional Content</div>
    render(<Footer additionalContent={additionalContent} />)
    expect(screen.getByText('Additional Content')).toBeInTheDocument()
  })

  test('applies custom styles to the Footer', () => {
    const customStyles = { backgroundColor: 'red' }
    render(<Footer customStyles={customStyles} />)
  })

  test('renders copyright text', () => {
    const currentYear = new Date().getFullYear()
    render(
      <Footer
        companyName='Test Company'
        copyrightText={
          <>&copy; {currentYear} Test Company. All rights reserved.</>
        }
      />
    )
    expect(
      screen.getByText(`© ${currentYear} Test Company. All rights reserved.`)
    ).toBeInTheDocument()
  })

  describe('Responsive behavior', () => {
    test('displays link groups in a column on mobile', () => {
      useMediaQueryMock.mockImplementation(() => true)
      const footerLinks = [
        [
          { label: 'Company' },
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
        ],
        [
          { label: 'Support' },
          { label: 'Help Center', href: '/help' },
          { label: 'Contact Us', href: '/contact' },
        ],
      ]
      render(<Footer links={footerLinks} />)
      const linksContainer = screen.getByTestId('links-container')
      expect(linksContainer).toHaveStyle('flex-direction: column')
    })

    test('displays link groups in a row on desktop', () => {
      useMediaQueryMock.mockImplementation(() => false)
      const footerLinks = [
        [
          { label: 'Company' },
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
        ],
        [
          { label: 'Support' },
          { label: 'Help Center', href: '/help' },
          { label: 'Contact Us', href: '/contact' },
        ],
      ]
      render(<Footer links={footerLinks} />)
      const linksContainer = screen.getByTestId('links-container')
      expect(linksContainer).toHaveStyle('flex-direction: row')
    })
  })
})
