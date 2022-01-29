import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchPage from './Components/Pages/SearchPage';
import { Home } from './Components/Pages/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App;
