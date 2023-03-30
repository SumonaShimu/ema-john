import { useState } from 'react'
import Header from './comp/Header'
import Shop from './comp/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>wecome to ama john </h1> */}
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
