import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
