import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
