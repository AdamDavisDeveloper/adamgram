import { useState } from 'react'
import Logo from './assets/logo.svg'
import './Main.scss'

function App() {
  return (
    <div id="App">
      <div className="logo-container">
        <img src={Logo} alt="Adamgram logo" />
      </div>

      <div id="BioWrapper">
        
      </div>
    </div>
  )
}

export default App
