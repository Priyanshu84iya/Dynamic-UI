import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ComponentsPage } from './pages/Components'
import { Guidelines } from './pages/Guidelines'
import { Overview } from './pages/Overview'
import { Tokens } from './pages/Tokens'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
