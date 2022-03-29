import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:id' element={<SingleProduct />} />
    </Routes>
  )
}

export default App
