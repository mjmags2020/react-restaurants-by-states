import { useState } from 'react'
import Navbar from './components/Navbar'
import Restaurants from './components/Restaurants'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Restaurants />
        </div>
      </main>
    </>


  )
}

export default App
