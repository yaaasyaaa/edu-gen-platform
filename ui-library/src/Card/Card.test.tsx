import { render, screen } from '@testing-library/react'

import { Card } from './Card'

describe('Card', () => {
  it('отображает заголовок', () => {
    render(<Card title="Тестовый заголовок">Контент</Card>)
    
    expect(screen.getByText('Тестовый заголовок')).toBeInTheDocument()
  })

  it('отображает дочерний контент (children)', () => {
    render(
      <Card title="Заголовок">
        <p>Внутренний текст карточки</p>
      </Card>
    )
    
    expect(screen.getByText('Внутренний текст карточки')).toBeInTheDocument()
  })

  it('применяет дополнительный CSS-класс', () => {
    render(
      <Card title="Заголовок" className="my-custom-class">
        Контент
      </Card>
    )
    
    const cardElement = screen.getByText('Заголовок').closest('.card')

    expect(cardElement).toHaveClass('my-custom-class')
  })
})