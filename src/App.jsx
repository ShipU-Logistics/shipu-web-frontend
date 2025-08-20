import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from './pages/Business'
import Register from './pages/Register'
import TrackingSection from './pages/track-shipment';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/track-shipment" element={<TrackingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
