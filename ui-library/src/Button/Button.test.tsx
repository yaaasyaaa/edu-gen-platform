import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'

describe('Button', () => {
  it('отображает переданный текст (children)', () => {
    render(<Button>Нажми меня</Button>)
    expect(screen.getByText('Нажми меня')).toBeInTheDocument()
  })

  it('вызывает функцию onClick при клике', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    
    render(<Button onClick={handleClick}>Клик</Button>)
    
    await user.click(screen.getByText('Клик'))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('применяет стили primary по умолчанию', () => {
    render(<Button>Кнопка</Button>)
    const button = screen.getByText('Кнопка')

    // Проверяем, что применился синий фон
    expect(button).toHaveStyle({ backgroundColor: '#3b82f6' })
  })

  it('применяет стили secondary при передаче соответствующего пропса', () => {
    render(<Button variant="secondary">Кнопка</Button>)
    const button = screen.getByText('Кнопка')

    // Проверяем, что применился серый фон
    expect(button).toHaveStyle({ backgroundColor: '#e2e8f0' })
  })
})