import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from './pages/Business'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
