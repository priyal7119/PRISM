// src/App.jsx
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NetworkHealth from "./pages/NetworkHealth";
import Predictions from "./pages/Predictions";
import Copilot from "./pages/AICopilot";
import Devices from "./pages/Devices";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Layout from "./components/layout/Layout";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Dashboard /></Layout>} />
                <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
                <Route path="/network" element={<Layout><NetworkHealth /></Layout>} />
                <Route path="/predictions" element={<Layout><Predictions /></Layout>} />
                <Route path="/copilot" element={<Layout><Copilot /></Layout>} />
                <Route path="/devices" element={<Layout><Devices /></Layout>} />
                <Route path="/alerts" element={<Layout><Alerts /></Layout>} />
                <Route path="/reports" element={<Layout><Reports /></Layout>} />
                <Route path="/settings" element={<Layout><Settings /></Layout>} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
