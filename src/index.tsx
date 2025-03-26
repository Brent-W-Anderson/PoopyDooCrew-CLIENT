import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './pages/Pages'
import { BrowserRouter as Router } from 'react-router-dom'

import '@fontsource/roboto'
import './index.scss'

const App = () => {
    useEffect( () => {
        // clean out initial index.html spinner style
        document.getElementById( 'circle-spinner-style' )?.remove()

        // Remove all empty <style> tags
        document.querySelectorAll( 'style' ).forEach( style => {
            if ( !style.innerHTML.trim() ) {
                style.remove()
            }
        } )
    }, [] )

    return (
        <React.StrictMode>
            <Router>
                <Pages />
            </Router>
        </React.StrictMode>
    )
}

ReactDOM.createRoot( document.getElementById( 'root' )! ).render( <App /> )