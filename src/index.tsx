import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './pages/Pages'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'
import '@fontsource/roboto'

// TODO: add <Spinner /> component instead of using Loading fonts...

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState( false )

    useEffect( () => {
        document.fonts.ready.then( () => setFontsLoaded( true ) )
    }, [] )

    return fontsLoaded ? (
        <React.StrictMode>
            <Router>
                <Pages />
            </Router>
        </React.StrictMode>
    ) : (
        <div>Loading fonts...</div>
    )
}

ReactDOM.createRoot( document.getElementById( 'root' )! ).render( <App /> )