import { useState } from 'react'
import Navbar from './components/Navbar'
import Restaurants from './components/Restaurants'

function App() {
  const [count, setCount] = useState(0)

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
