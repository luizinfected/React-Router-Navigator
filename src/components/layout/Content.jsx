import React from 'react'
import './Content.css'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import { Routes, Route} from 'react-router-dom'
import NotFound from '../../views/examples/NotFound'

const Content = props =>(
    <main className="Content">
        <Routes>
            {/* Páginas a serem mostradas */}
            <Route path="/" element={<Home></Home>}/>
            <Route path="/about" element={<About></About>}/>
            <Route path="/param/:id" element={<Param></Param>}/>
            <Route path="/param/:id" element={<Param></Param>}/>

            {/* qualquer página que não estiver acima vai cair no componente NotFound */}
            <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
    </main>
    )   

export default Content