import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
  </Router>
  )
}

export default App
