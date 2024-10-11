import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'  element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
