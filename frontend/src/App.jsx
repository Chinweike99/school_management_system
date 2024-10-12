import './App.css'
import ChooseUser from './Components/ChooseUser/ChooseUser'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/chooseuser'  element={<ChooseUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
