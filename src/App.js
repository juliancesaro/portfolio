import React from "react"
import "./App.css"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
