import React from 'react'
import './App.css'
import Menu from '../components/layout/Menu.jsx'
import Content from '../components/layout/Content.jsx'
import {BrowserRouter as Router} from 'react-router-dom'

const App = props =>(
    <div className="App">
        <Router>
            <Menu/>
            <Content/>
        </Router>
    </div>
)
export default App