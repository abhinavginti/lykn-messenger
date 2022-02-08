import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SocketProvider } from './context/SocketContext'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
