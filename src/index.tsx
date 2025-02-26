import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './pages/Pages'
import Navbar from './components/Navbar/Navbar'
import './index.css'

ReactDOM.createRoot( document.getElementById( 'root' )! )
    .render( <React.StrictMode>
        <Navbar />
        <Pages />
    </React.StrictMode> )