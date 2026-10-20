import { Link } from 'react-router-dom';
import banner from '../assets/images/B_shop.jpg'
import dress from '../assets/images/shop_images/dress4.jpg'
import dress1 from '../assets/images/shop_images//dress3.jpg'
import top from '../assets/images/shop_images/top3.jpg'
import jacket from '../assets/images/shop_images/jacket.jpg'
import jacket1 from '../assets/images/shop_images/jacket2.jpg'
import james from '..//assets/images/shop_images/jean2.jpg'
import top1 from '../assets/images/shop_images/top2.jpg'
import jean1 from '..//assets/images/shop_images/jean4.jpg'
import serum from '..//assets/images/Serum.jpg'
import eyeshow from '..//assets/images/eyeshadow.jpg'
import perfome  from '..//assets/images/perfume.jpg'
import cleaner from '../assets/images/cleanser.jpg'
import necklace from '../assets/images/necklace.jpeg'
import wallet from '..//assets/images/wallet.jpg'
import scraft from '..//assets/images/scraft.jpeg'
import watch from '../assets/images/watch.jpg'

import { useContext } from 'react';
import { CartContext } from '../context/CartContextValue';


// import React, { useContext } from 'react'
// import { UserContext } from '../context/UserContext';
// import Login from '../Components/Login'
// import ProductList from '../Components/ProductList'
// import Cart from '../Components/Cart'




const Shop = () => {
  
  // const { user, logout, addToCart } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);

  
  
return (
 <>

<div className="h-[80px]" />
 
<section
 className="relative w-full h-[270px]"style={{
 backgroundImage: `url(${banner})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 }}
 >
      

<div className="relative z-10 ml-130">
 <h2 className="text-4xl font-bold mr-50 text-center pt-30 ">#Shop Now</h2>
 <p className="text-md text-center">Save more with coupons & up to 50% off to our special offers!</p>
  </div>

 </section>
  <section id="clothing-section-detail" className="bg-gray-200 py-6 px-2 mb-12 w-full overflow-hidden ">
   <div className="w-max mx-auto">
     <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Latest Clothing Collection</h2>
 
     <div className="flex gap-6">
     <Link to="/product/1">
  <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src={dress} alt="Elegant Dress" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-77" />
    <h3 className="text-lg font-semibold mb-1">Elegant Floral Dress</h3>
    <p className="text-gray-600 text-sm text-center">Flowy and comfortable, perfect for any occasion.</p>
     <div className="mt-4 w-full flex justify-between items-center">
        <span className="text-base font-bold text-teal-500">$19.99</span>
     
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
 onClick={(e) => {
  e.preventDefault();
  addToCart({
    id: '1',
    name: 'Elegant Floral Dress',
    price: 19.99,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
 
       {/* Item 2 */}
     <Link to="/product/2">
  <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src={top} alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-77" />
    <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
    <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>

    {/* Price & Add to Cart button in a row */}
    <div className="mt-4 w-full flex justify-between items-center">
      <span className="text-base font-bold text-teal-500">$14.50</span>
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 2,
    name: 'Casual Linen Top',
    price: 14.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
 
       {/* Item 3 */}
         <Link to="/product/3">
       <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
         <img src={jacket} alt="Denim Jacket" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-80" />
         <h3 className="text-lg font-semibold mb-1">Classic Denim Jacket</h3>
         <p className="text-gray-600 text-sm text-center">A timeless piece to elevate any outfit.</p>
        
      
        <div className="mt-4 w-full flex justify-between items-center">
        <span className="mt-2 text-base font-bold text-teal-600">$29.00</span>

      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 3,
    name: 'Classic Denim Jacket',
    price: 29.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
     </div>
       </Link>
 
       {/* Item 4 */}
  
       
       <Link to="/product/4">
  <div className="w-[280px] bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <img src={jean1} alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-72" />
    <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
    <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>

    {/* Price & Add to Cart button in a row */}
    <div className="mt-4 w-full flex justify-between items-center">
      <span className="text-base font-bold text-teal-500">$14.50</span>
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 4,
    name: 'Casual Linen Top',
    price: 14.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
       
     </div>
     
   </div>

  <div className="w-max mx-auto mt-10">
    <div className="w-max mx-auto">
 
 
     <div className="flex gap-6">
     <Link to="/product/1">
  <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src={dress1} alt="Elegant Dress" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-77" />
    <h3 className="text-lg font-semibold mb-1">Elegant Floral Dress</h3>
    <p className="text-gray-600 text-sm text-center">Flowy and comfortable, perfect for any occasion.</p>
     <div className="mt-4 w-full flex justify-between items-center">
        <span className="text-base font-bold text-teal-500">$19.99</span>
     
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 2,
    name: 'Elegent Florak Dress',
    price: 19.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
 
       {/* Item 2 */}
     <Link to="/product/2">
  <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src={top1} alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-77" />
    <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
    <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>

    {/* Price & Add to Cart button in a row */}
    <div className="mt-4 w-full flex justify-between items-center">
      <span className="text-base font-bold text-teal-500">$14.50</span>
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 2,
    name: 'Casual Linen Top',
    price: 14.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
 
       {/* Item 3 */}
         <Link to="/product/3">
       <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
         <img src={jacket1} alt="Denim Jacket" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-80" />
         <h3 className="text-lg font-semibold mb-1">Classic Denim Jacket</h3>
         <p className="text-gray-600 text-sm text-center">A timeless piece to elevate any outfit.</p>
        
      
        <div className="mt-4 w-full flex justify-between items-center">
        <span className="mt-2 text-base font-bold text-teal-600">$29.00</span>

      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 3,
    name: 'Classic Denim Jacket',
    price: 29.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
     </div>
       </Link>
 
       {/* Item 4 */}
  
       
       <Link to="/product/4">
  <div className="w-[280px] bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <img src={james} alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105 h-72" />
    <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
    <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>

    {/* Price & Add to Cart button in a row */}
    <div className="mt-4 w-full flex justify-between items-center">
      <span className="text-base font-bold text-teal-500">$14.50</span>
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 4,
    name: 'Casual Linen Top',
    price: 14.50,
  });
}}

      >
        Add to Cart
      </button>
    </div>
  </div>
</Link>
       
     </div>
     
   </div>

    <div className="flex gap-6 mt-8" >


     

    

      
    </div>
  </div>
</section>

<section id="beauty-section-detail" className="bg-gray-200 py-16 px-4 ">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Your Beauty Essentials</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Beauty Item 1 */}
  <Link to="/product/5" className="block h-full">
      <div className="h-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={serum}alt="Hydrating Serum" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Ultra-Hydrating Serum</h3>
        <p className="text-gray-600 text-center">Deeply moisturizes and plumps your skin.</p>
        <div className="mt-auto w-full flex justify-between items-center pt-4">
        <span className="text-base font-bold text-teal-500">$55.99</span>
     
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 5,
    name: 'Ultra-Hydrating Serum',
    price: 55.99,
  });
}}
      >
        Add to Cart
      </button>
    </div>
    </div>
      </Link>

      {/* Beauty Item 2 */}
      <Link to="/product/6" className="block h-full">
      <div className="h-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={eyeshow}alt="Eyeshadow Palette" className="rounded-md mb-4 w-64 h-64 object-cover " />
        <h3 className="text-xl font-semibold mb-2 text-center">Vibrant Eyeshadow Palette</h3>
        <p className="text-gray-600 text-center">Create endless eye looks with our rich pigments.</p>
        <div className="mt-auto w-full flex justify-between items-center pt-4">
        <span className="text-base font-bold text-teal-500">$50.97</span>
     
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 6,
    name: 'Vibrant Eyeshadow Palette',
    price: 50.97,
  });
}}
      >
        Add to Cart
      </button>
    </div>
        
      </div>
      </Link>

      {/* Beauty Item 3 */}
      <Link to="/product/7" className="block h-full">
      <div className="h-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={perfome} alt="Signature Perfume" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Signature Eau de Parfum</h3>
        <p className="text-gray-600 text-center">A unique and long-lasting fragrance signature.</p>
        <div className="mt-auto w-full flex justify-between items-center pt-4">
        <span className="text-base font-bold text-teal-500">$99.00</span>
     
      <button
        className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
        onClick={(e) => {
  e.preventDefault(); 
  addToCart({
    id: 7,
    name: 'Signature Eau de Parfum',
    price: 99.00,
  });
}}

      >
        Add to Cart
      </button>
    </div>
      </div>
      </Link>

      {/* Beauty Item 4 */}
      <div className="h-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={cleaner} alt="Facial Cleanser" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Gentle Facial Cleanser</h3>
        <p className="text-gray-600 text-center">Removes impurities while preserving skin moisture.</p>
        <div className="mt-auto flex w-full items-center justify-between pt-4">
          <span className="text-base font-bold text-teal-500">$25.00</span>
          <button
            type="button"
            className="bg-teal-400 text-white px-3 py-1 text-sm rounded hover:bg-teal-600"
            onClick={() => addToCart({ id: 8, name: 'Gentle Facial Cleanser', price: 25.00 })}
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="accessories-section-detail" className="scroll-mt-24 bg-gray-200 py-16 px-4 mb-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Must-Have Accessories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Accessory 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={necklace} alt="Statement Necklace" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Bold Statement Necklace</h3>
        <p className="text-gray-600 text-center">Add a touch of glamour to any ensemble.</p>
        <div className="mt-4 flex w-full items-center justify-between">
          <span className="text-base font-bold text-teal-600">$45.00</span>
          <button type="button" onClick={() => addToCart({ id: 'accessory-necklace', name: 'Bold Statement Necklace', price: 45 })} className="rounded bg-teal-400 px-3 py-1 text-sm text-white hover:bg-teal-600">Add to Cart</button>
        </div>
      </div>

      {/* Accessory 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={wallet} alt="Leather Wallet" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Premium Leather Wallet</h3>
        <p className="text-gray-600 text-center">Stylish and functional, designed for durability.</p>
        <div className="mt-4 flex w-full items-center justify-between">
          <span className="text-base font-bold text-teal-600">$65.00</span>
          <button type="button" onClick={() => addToCart({ id: 'accessory-wallet', name: 'Premium Leather Wallet', price: 65 })} className="rounded bg-teal-400 px-3 py-1 text-sm text-white hover:bg-teal-600">Add to Cart</button>
        </div>
      </div>

      {/* Accessory 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={scraft} alt="Silk Scarf" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Luxurious Silk Scarf</h3>
        <p className="text-gray-600 text-center">Versatile and elegant, perfect for all seasons.</p>
        <div className="mt-4 flex w-full items-center justify-between">
          <span className="text-base font-bold text-teal-600">$30.00</span>
          <button type="button" onClick={() => addToCart({ id: 'accessory-scarf', name: 'Luxurious Silk Scarf', price: 30 })} className="rounded bg-teal-400 px-3 py-1 text-sm text-white hover:bg-teal-600">Add to Cart</button>
        </div>
      </div>

      {/* Accessory 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={watch} alt="Smart Watch" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Elegant Smart Watch</h3>
        <p className="text-gray-600 text-center">Modern, stylish, and packed with features.</p>
        <div className="mt-4 flex w-full items-center justify-between">
          <span className="text-base font-bold text-teal-600">$120.00</span>
          <button type="button" onClick={() => addToCart({ id: 'accessory-watch', name: 'Elegant Smart Watch', price: 120 })} className="rounded bg-teal-400 px-3 py-1 text-sm text-white hover:bg-teal-600">Add to Cart</button>
        </div>
      </div>

    </div>
  </div>
</section>
</>
)
}

export default Shop
