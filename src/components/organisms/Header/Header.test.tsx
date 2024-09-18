
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders Header with provided title', () => {
  const { getByText } = render(<Header title="Test App" />)
  expect(getByText('Test App')).toBeInTheDocument()
})
