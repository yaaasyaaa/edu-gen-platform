import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from '@edu-gen/ui-library'

export const GeneratePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1>Генератор заданий</h1>
      <Card title="Параметры нового задания">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            Тема задания:
            <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}>
              <option>Основы JS</option>
              <option>Node.js</option>
              <option>Базы данных</option>
            </select>
          </label>
          
          <label>
            Тип задания:
            <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}>
              <option>Тест (выбор варианта)</option>
              <option>Теория (текстовый ответ)</option>
            </select>
          </label>

          <Button onClick={() => alert('Заглушка: здесь будет запрос к API бэкенда!')}>
            Сгенерировать
          </Button>

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px dashed #ccc' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '10px' }}>
              (Тестовая ссылка для студента)
            </p>
            <Link to="/task/123" style={{ color: '#3b82f6', fontWeight: 'bold' }}>
              Перейти к прохождению задания →
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}