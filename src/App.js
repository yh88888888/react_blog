import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Design from './pages/Design';
import Info from './pages/Info';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> //상태관리
        <Route path="/about" element={<About />} /> //useEffect
        <Route path="/login" element={<Login />} />
        <Route path="/info/:id/good/:goodId" element={<Info />} /> // :id
        바인딩하여 받는다.
        <Route
          path="/design"
          element={<Design user={{ id: 1, username: 'cos' }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
