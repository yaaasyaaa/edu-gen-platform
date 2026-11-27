/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App Router Skeleton', () => {
  it('отображает главную страницу и навигацию', () => {
    render(<App />)
    
    // Проверяем новый заголовок главной страницы
    expect(screen.getByRole('heading', { level: 1, name: /Добро пожаловать в EduGenBot!/i })).toBeInTheDocument()
    
    // Проверяем, что есть ссылки навигации
    expect(screen.getByRole('link', { name: /Вход/i })).toBeInTheDocument()
    
    // Проверяем, что кнопка из нашей UI-библиотеки отрендерилась
    expect(screen.getByRole('button', { name: /Тест библиотеки/i })).toBeInTheDocument()
  })

  it('переключает страницы при клике на ссылки (Роутинг)', async () => {
    const user = userEvent.setup()

    render(<App />)

    // Проверяем, что изначально мы на главной
    expect(screen.getByText(/Платформа для автоматической генерации/i)).toBeInTheDocument()

    // Кликаем на ссылку "Вход"
    await user.click(screen.getByRole('link', { name: /Вход/i }))

    // Проверяем, что открылась страница входа
    expect(screen.getByRole('heading', { level: 1, name: /Страница входа/i })).toBeInTheDocument()
  })
})