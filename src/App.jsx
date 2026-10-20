import { Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import ProductDetails from './Pages/ProductDetails'
import Contact from "./Pages/Contact"
import About from './Pages/About';
import { Footer } from './Components/Footer';
import Cart from './Components/Cart'

//import Login from './Pages/Login';//



function App() {


  return (
    <div className="flex min-h-screen flex-col">
    <Header/>
 <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
         

        </Routes>
</main>
<Footer/>
    </div>
)}

export default App
