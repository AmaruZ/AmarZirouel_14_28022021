import { screen } from '@testing-library/react'
import Home from '.'
import { render } from '../../utils/test'

describe('The Home component', () => {
    it('should render the title', () => {
        render(<Home />)
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Create Employee',
            })
        ).toBeTruthy()
    })
})
