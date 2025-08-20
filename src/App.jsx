import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import TrackingSection from './pages/track-shipment';
import Header from './components/Header';
import Login from './pages/Login';
import Side from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TrackingSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Side />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
