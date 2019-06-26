import { render, fireEvent, cleanup } from '@testing-library/vue'
import HelloWorld from '../HelloWorld.vue'

describe('Main Form', () => {
  it('Should show error when submitting without a name', async () => {
    const { getByText, debug, queryByText } = render(HelloWorld)
    const submitButton =  getByText('Submit')

    expect(queryByText('Company Name required.')).toBeNull()
    await fireEvent.click(submitButton)

    expect(queryByText('Company Name required.')).toBeTruthy()
  })
})