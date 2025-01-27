

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import Sobre from './Sobre.jsx'
import Conteudo from './Conteudo.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Nav />
       <Routes>
        <Route path='/' element={<Sobre />} />
        <Route path='/conteudos' element={<Conteudo />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
