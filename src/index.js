import React from 'react'
import ReactDOMClient from 'react-dom/client'
// import ReactDOM from 'react-dom'

import App from './App'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App tab='profile' />)

// ReactDOM.render(<App />, document.getElementById('root'))
// d8b0ba6
