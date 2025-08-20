import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <section> <Home></Home> </section>
    <section>  <About></About> </section>
    <section> <Services></Services> </section>
    <section><Footer></Footer> </section>

    </>
  )
}

export default App
