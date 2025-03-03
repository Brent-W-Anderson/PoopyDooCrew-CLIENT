import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './pages/Pages'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import '@fontsource/roboto'

ReactDOM.createRoot( document.getElementById( 'root' )! )
    .render( <React.StrictMode>
        <Router>
            <Navbar />
            <Pages />
        </Router>
    </React.StrictMode> )