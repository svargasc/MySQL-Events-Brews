import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
