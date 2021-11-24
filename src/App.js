import React from 'react'  
import { Router } from 'react-router-dom'
import Routes from './Routes'
import {createBrowserHistory} from 'history'
import Navbar from './componentes/Navbar'

const customHistory = createBrowserHistory({basename: '/'})
const App = () => {
  return (
    
     <Router history={customHistory}>
       <Navbar/>
        <Routes/>
     </Router>
  )
}

export default App
