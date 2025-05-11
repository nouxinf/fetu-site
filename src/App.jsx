import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Banner from "./Banner.jsx"
import "./App.css"
function App() {
  return (
    <>
      <div className="flexcontainer">
      <Navbar />
      <Banner />
      </div>
    </>
  )
}

export default App
