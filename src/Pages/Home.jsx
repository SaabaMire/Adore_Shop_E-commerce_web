
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import C_Clothes from '../assets/images/C_Clothes.jpg'
import bag from '../assets/images/A_bag.jpeg'
import beauty from '../assets/images/B_makeup.jpeg'
import dress  from '../assets/images/ElegentDress.jpg'
import top from '../assets/images/top.jpeg'
import jacket from '../assets/images/jacket.jpg'
import james from '..//assets/images/james.jpeg'
import necklace from '../assets/images/necklace.jpeg'
import wallet from '..//assets/images/wallet.jpg'
import scraft from '..//assets/images/scraft.jpeg'
import watch from '../assets/images/watch.jpg'
import serum from '..//assets/images/Serum.jpg'
import eyeshow from '..//assets/images/eyeshadow.jpg'
import perfome  from '..//assets/images/perfume.jpg'
import cleaner from '../assets/images/cleanser.jpg'

import fashion1 from '../assets/images/fashion1.jpg';
import fashion2 from '../assets/images/fashion2.jpg';
import fashion3 from '../assets/images/fashion3.jpg';
import fashion4 from '../assets/images/fashion4.jpg';

import { useNavigate } from 'react-router-dom';


const images = [
  { src: fashion1, alt: 'Fashion 1' },
  { src: fashion2, alt: 'Fashion 2' },
  { src: fashion3, alt: 'Fashion 3' },
  { src: fashion4, alt: 'Fashion 4' }
];

const HeroSection = () => {
  
  return (
    <div className="w-full h-[370px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Home = () => {

    const navigate = useNavigate(); // initialize
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // block: 'start' aligns the top of the element to the top of the viewport
    }
  };

    const handleShopClick = () => {
    navigate('/shop'); // navigate to shop page
  };
  return (
    <div className="bg-pink-50 min-h-screen pt-[70px]"> {/* This pushes everything below header */}
      
      {/* Welcome Section */}
      <section className="text-center bg-pink-100 py-10">
        <h1 className="text-3xl font-bold font-serif text-pink-900 mb-4">Welcome to ADORA Women's Place</h1>
        <p className="text-lg text-gray-700 mb-3">Discover the latest trends in fashion & beauty</p>
        
      {/* Image Carousel */}
      <HeroSection />
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition" onClick={handleShopClick} >
          Shop Now
        </button>
          
      </section>
      
      {/* Categories */}
     
    <section id="categories-section" className="py-14 px-4 ">
  <h2 className="text-4xl font-bold text-gray-800 mb-5 text-center ">Shop by Category</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Clothing Section */}
    <div className="bg-white p-3 shadow-xl rounded-lg text-center flex flex-col items-center justify-between min-h-[550px] w-full">
      <h3 className="text-3xl font-bold text-pink-700 mb-4">Clothing</h3>

      <div className="w-full h-72 overflow-hidden rounded-md shadow-md mb-4 transition-transform duration-300 hover:scale-105">
        <img
          src={C_Clothes}
          alt="Shop Clothing"
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-6">
        Discover stylish dresses, tops, pants, and outerwear for every occasion.
      </p>

      <button
        onClick={() => scrollToSection('clothing-section-detail')}
        className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition duration-300"
      >
        View Collection
      </button>
    </div>

    {/* Accessories Section */}
    <div className="bg-white p-3 shadow-xl rounded-lg text-center flex flex-col items-center justify-between min-h-[550px] w-full">
      <h3 className="text-3xl font-bold text-purple-700 mb-4">Accessories</h3>

      <div className="w-full h-72 overflow-hidden rounded-md shadow-md mb-4 transition-transform duration-300 hover:scale-105">
        <img
          src={bag}
          alt="Accessories Category"
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-6">
        Find the perfect bags, jewelry, scarves, and more to complete your look.
      </p>

      <button
        onClick={() => scrollToSection('accessories-section-detail')}
        className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition duration-300"
      >
        View Accessories
      </button>
    </div>

    {/* Beauty Section */}
    <div className="bg-white p-3 shadow-xl rounded-lg text-center flex flex-col items-center justify-between min-h-[550px] w-full">
      <h3 className="text-3xl font-bold text-teal-700 mb-4">Beauty</h3>

      <div className="w-full h-72 overflow-hidden rounded-md shadow-md mb-4 transition-transform duration-300 hover:scale-105">
        <img
          src={beauty}
          alt="Beauty Category"
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-6">
        Discover our collection of skincare, makeup, and fragrances for a radiant you.
      </p>

      <button
        onClick={() => scrollToSection('beauty-section-detail')}
        className="px-6 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition duration-300"
      >
        View Beauty
      </button>
    </div>
  </div>
</section>


      {/* Placeholder sections with more content for scrolling */}
      <section id="clothing-section-detail" className="bg-pink-100 py-6 px-2 mb-12 w-full overflow-hidden ">
  <div className="w-max mx-auto">
    <h2 className="text-3xl font-bold text-pink-800 mb-4 text-center">Our Latest Clothing Collection</h2>

    <div className="flex gap-6">
      {/* Item 1 */}
      <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center ">
        <img src={dress} alt="Elegant Dress" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105" />
        <h3 className="text-lg font-semibold mb-1">Elegant Floral Dress</h3>
        <p className="text-gray-600 text-sm text-center">Flowy and comfortable, perfect for any occasion.</p>
        <span className="mt-2 text-base font-bold text-pink-600">$79.99</span>
      </div>

      {/* Item 2 */}
      <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <img src={top}alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105" />
        <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
        <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>
        <span className="mt-2 text-base font-bold text-pink-600">$34.50</span>
      </div>

      {/* Item 3 */}
      <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <img src={jacket} alt="Denim Jacket" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105" />
        <h3 className="text-lg font-semibold mb-1">Classic Denim Jacket</h3>
        <p className="text-gray-600 text-sm text-center">A timeless piece to elevate any outfit.</p>
        <span className="mt-2 text-base font-bold text-pink-600">$89.00</span>
      </div>

      {/* Item 4 */}
      <div className="w-[280px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <img src={james} alt="Casual Top" className="rounded-md mb-3 transition-transform duration-300 hover:scale-105" />
        <h3 className="text-lg font-semibold mb-1">Casual Linen Top</h3>
        <p className="text-gray-600 text-sm text-center">Lightweight and breathable for everyday style.</p>
        <span className="mt-2 text-base font-bold text-pink-600">$34.50</span>
      </div>
    </div>
  </div>
</section>

<section id="accessories-section-detail" className="bg-purple-100 py-16 px-4 mb-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">Must-Have Accessories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Accessory 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={necklace} alt="Statement Necklace" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Bold Statement Necklace</h3>
        <p className="text-gray-600 text-center">Add a touch of glamour to any ensemble.</p>
        <span className="mt-4 text-lg font-bold text-purple-600">$45.00</span>
      </div>

      {/* Accessory 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={wallet} alt="Leather Wallet" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Premium Leather Wallet</h3>
        <p className="text-gray-600 text-center">Stylish and functional, designed for durability.</p>
        <span className="mt-4 text-lg font-bold text-purple-600">$65.00</span>
      </div>

      {/* Accessory 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={scraft} alt="Silk Scarf" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Luxurious Silk Scarf</h3>
        <p className="text-gray-600 text-center">Versatile and elegant, perfect for all seasons.</p>
        <span className="mt-4 text-lg font-bold text-purple-600">$30.00</span>
      </div>

      {/* Accessory 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={watch} alt="Smart Watch" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Elegant Smart Watch</h3>
        <p className="text-gray-600 text-center">Modern, stylish, and packed with features.</p>
        <span className="mt-4 text-lg font-bold text-purple-600">$120.00</span>
      </div>

    </div>
  </div>
</section>


<section id="beauty-section-detail" className="bg-teal-100 py-16 px-4 mb-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-teal-800 mb-10 text-center">Your Beauty Essentials</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Beauty Item 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={serum}alt="Hydrating Serum" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Ultra-Hydrating Serum</h3>
        <p className="text-gray-600 text-center">Deeply moisturizes and plumps your skin.</p>
        <span className="mt-4 text-lg font-bold text-teal-600">$55.00</span>
      </div>

      {/* Beauty Item 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={eyeshow}alt="Eyeshadow Palette" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Vibrant Eyeshadow Palette</h3>
        <p className="text-gray-600 text-center">Create endless eye looks with our rich pigments.</p>
        <span className="mt-4 text-lg font-bold text-teal-600">$40.00</span>
      </div>

      {/* Beauty Item 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={perfome} alt="Signature Perfume" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Signature Eau de Parfum</h3>
        <p className="text-gray-600 text-center">A unique and long-lasting fragrance.</p>
        <span className="mt-4 text-lg font-bold text-teal-600">$99.00</span>
      </div>

      {/* Beauty Item 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={cleaner} alt="Facial Cleanser" className="rounded-md mb-4 w-64 h-64 object-cover" />
        <h3 className="text-xl font-semibold mb-2 text-center">Gentle Facial Cleanser</h3>
        <p className="text-gray-600 text-center">Removes impurities while preserving skin moisture.</p>
        <span className="mt-4 text-lg font-bold text-teal-600">$25.00</span>
      </div>

    </div>
  </div>
</section>




    
    </div>
  );
};

export default Home;
