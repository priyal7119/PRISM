import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NetworkHealth from './pages/NetworkHealth'
import Predictions from './pages/Predictions'
import AICopilot from './pages/AICopilot'
import Devices from './pages/Devices'
import Alerts from './pages/Alerts'
import Telemetry from './pages/Telemetry'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/network" element={<NetworkHealth />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/prediction" element={<Predictions />} />
        <Route path="/copilot" element={<AICopilot />} />
        <Route path="/telemetry" element={<Telemetry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
