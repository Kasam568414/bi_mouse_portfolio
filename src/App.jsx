import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
    {/* <Navbar></Navbar>
    <section> <Home></Home> </section>
    <section> <Services></Services> </section>
    <section>  <About></About> </section>
    <section><Footer></Footer> </section> */}



    <Navbar></Navbar>
    <main>
      <Home></Home>
      <Services></Services>
      <About></About>
    </main>
    <Footer></Footer>

    </>
  )
}

export default App
