// import { Route, Routes } from 'react-router-dom'
// import List from './pages/List'
import './Header.css'

function Header() {
  return (
    // <Routes>
      <div className="Header">
        <button>Menu</button>
        <h1>Million Live Portal</h1>
        <button>Home</button>
        {/* <Route path='/' element={<List />} /> */}
      </div>
    // </Routes> 
  )
}

export default Header