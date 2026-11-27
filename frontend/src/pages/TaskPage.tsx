import React from 'react'

import { Card, Button } from '@edu-gen/ui-library'
import { useParams } from 'react-router-dom'

export const TaskPage: React.FC = () => {
  // Получаем ID задания из ссылки (например, /task/12345)
  const { id } = useParams<{ id: string }>()

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Прохождение задания</h1>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>
        Вы перешли по ссылке на задание ID: <strong>{id}</strong>
      </p>

      <Card title="Задание для студента">
        <p style={{ marginBottom: '15px' }}>
          [Здесь будет отображаться вопрос, который сгенерировал преподаватель]
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Введите ваше имя..." 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <textarea 
            placeholder="Введите ваш ответ..." 
            rows={4}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <Button onClick={() => alert('Заглушка: ответ отправлен преподавателю!')}>
            Отправить ответ
          </Button>
        </div>
      </Card>
    </div>
  )
}