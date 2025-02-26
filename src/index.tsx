import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello, Poopy-Doo Crew!</h1>
        </div>
    )
}

ReactDOM.createRoot( document.getElementById( 'root' )! ).render( <React.StrictMode>
    <App />
</React.StrictMode> )