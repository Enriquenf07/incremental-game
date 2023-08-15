import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameProvider } from './context/GameContext.jsx'
import { DataProvider } from './context/DataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </DataProvider>
  </React.StrictMode>,
)
