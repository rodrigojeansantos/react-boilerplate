import { render, screen } from '@testing-library/react'

import Hightlight from '.'

describe('<Hightlight />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hightlight />)

    expect(
      screen.getByRole('heading', { name: /Hightlight/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
