import React from 'react'

import { Card } from '@edu-gen/ui-library'

export const StatsPage: React.FC = () => {
  return (
    <div>
      <h1>Статистика платформы</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <Card title="Всего студентов">
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>124</span>
        </Card>
        <Card title="Сгенерировано заданий">
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>856</span>
        </Card>
        <Card title="Средний балл">
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>4.2</span>
        </Card>
      </div>

      <Card title="Последние проверки">
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>[Здесь будет таблица с результатами студентов]</p>
      </Card>
    </div>
  )
}