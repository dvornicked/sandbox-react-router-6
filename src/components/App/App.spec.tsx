import { render, screen } from '@testing-library/react'
import { App } from '..'

it('renders title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Sandbox React Router 6/i)
  expect(titleElement).toBeInTheDocument()
})
