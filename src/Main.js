import { Route, Routes } from 'react-router-dom'

import List from './pages/List'
import Detail from './pages/Detail'
// import Write from './pages/Write'
// import Update from './pages/Update'

import './Main.css'

function Main() {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/detail/:id' element={<Detail />}  />
    </Routes>
  )
}

export default Main