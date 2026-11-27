import React from 'react'

export interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`} style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      border: '1px solid #e2e8f0'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#1e293b', fontSize: '1.1rem' }}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}