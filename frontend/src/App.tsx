import { Button } from '@edu-gen/ui-library'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { CheckPage } from './pages/CheckPage'
import { DashboardPage } from './pages/DashboardPage'
import { GeneratePage } from './pages/GeneratePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { StatsPage } from './pages/StatsPage'
import { TaskPage } from './pages/TaskPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Боковое меню */}
        <aside className="sidebar">
          <h2 className="sidebar__logo">EduGenBot</h2>
          <nav className="sidebar__nav">
            <Link to="/" className="sidebar__link">Главная</Link>
            <Link to="/login" className="sidebar__link">Вход</Link>
            <Link to="/dashboard" className="sidebar__link">Дашборд</Link>
            <Link to="/generate" className="sidebar__link">Генерация</Link>
            <Link to="/check" className="sidebar__link">Проверка</Link>
            <Link to="/stats" className="sidebar__link">Статистика</Link>
          </nav>
        </aside>

        {/* Рабочая зона */}
        <main className="content">
          <header className="content__header">
            <h3>Панель управления</h3>
            <Button onClick={() => alert('Кнопка из библиотеки работает!')}>
              Тест библиотеки
            </Button>
          </header>

          <div className="content__page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/generate" element={<GeneratePage />} />
              <Route path="/check" element={<CheckPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/task/:id" element={<TaskPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App