import React from 'react'

import { Card } from '@edu-gen/ui-library'

export const CheckPage: React.FC = () => {
  return (
    <div>
      <h1>Очередь на проверку</h1>
      <Card title="Работы студентов">
        <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
          <li>Иванов Иван — Задание "Замыкания в JS" <span style={{ color: '#f59e0b' }}>(Ожидает)</span></li>
          <li>Петрова Анна — Задание "Event Loop" <span style={{ color: '#10b981' }}>(Проверено)</span></li>
          <li>Сидоров Олег — Задание "SQL запросы" <span style={{ color: '#f59e0b' }}>(Ожидает)</span></li>
        </ul>
      </Card>
    </div>
  )
}