import React from 'react'

import { Card } from '@edu-gen/ui-library'

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Добро пожаловать в EduGenBot!</h1>
      <p style={{ marginBottom: '30px' }}>Платформа для автоматической генерации и проверки заданий.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <Card title="Генерация заданий">
          <p>Создавайте тесты и теоретические вопросы по разным темам за пару кликов.</p>
        </Card>
        <Card title="Проверка ответов">
          <p>Автоматическая проверка студенческих работ с подробными комментариями.</p>
        </Card>
        <Card title="Аналитика">
          <p>Отслеживайте прогресс группы и успеваемость каждого студента.</p>
        </Card>
      </div>
    </div>
  )
}