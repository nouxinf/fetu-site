import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Banner from "./Banner.jsx"
import About from "./About.jsx"
import "./App.css"
function App() {
  return (
    <>
      <div className="flexcontainer">
      <Navbar />
      <Banner />
      <main>
        <About />
      </main>
      </div>
    </>
  )
}

export default App
