

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import Sobre from './Sobre.jsx'
import Conteudo from './Conteudo.jsx'
import Especialistas from './Especialistas.jsx'
import Videos from './Videos.jsx'
import Contato from './Contato.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Nav />
       <Routes>
        <Route path='/' element={<Sobre />} />
        <Route path='/conteudos' element={<Conteudo />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/especialistas' element={<Especialistas />} />
        <Route path='/contato' element={<Contato />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
