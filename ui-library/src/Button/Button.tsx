import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  const styles: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: variant === 'primary' ? '#3b82f6' : '#e2e8f0',
    color: variant === 'primary' ? 'white' : '#334155',
  }

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  )
}