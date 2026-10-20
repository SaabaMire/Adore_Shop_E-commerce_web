import { useParams } from 'react-router-dom';
import dress from '../assets/images/shop_images/dress4.jpg';
import dress1 from '../assets/images/shop_images/dress1.jpg';
import dress2 from '../assets/images/shop_images/dress2.jpg';
import dress3 from '../assets/images/shop_images/dress3.jpg';
import top1 from '../assets/images/shop_images/top1.jpg'
import top2 from '../assets/images/shop_images/top2.jpg'
import top3 from '../assets/images/shop_images/top3.jpg'
import top4 from '../assets/images/shop_images/top4.jpg'
import jacket1 from '..//assets/images/shop_images/jacket.jpg'
import jacket2 from '..//assets/images/shop_images/jacket2.jpg'
import jacket3 from '..//assets/images/shop_images/jacket 3.jpg'
import jacket4 from '..//assets/images/shop_images/jacket4.jpg'
import jean1 from '../assets/images/shop_images/jeans1.jpg'
import jean2 from '../assets/images/shop_images/jean2.jpg'
import jean3 from '../assets/images/shop_images/jeans1.jpg'
import jean4 from '../assets/images/shop_images/jean4.jpg'
import serum1 from '../assets/images/shop_images/serum1.jpg'
import serum2 from '../assets/images/shop_images/serum2.jpg'
import serum3 from '../assets/images/shop_images/serum3.jpg'
import serum4 from '../assets/images/shop_images/serum4.jpg'
import eyeshow1 from '..//assets/images/shop_images/eyeshow1.jpg'
import eyeshow2 from '..//assets/images/shop_images/eyeshow2.jpg'
import eyeshow3 from '..//assets/images/shop_images/eyeshow3.jpg'
import eyeshow4 from '..//assets/images/shop_images/eyeshow4.jpg'
import perfume1 from '../assets/images/shop_images/perfome1.jpg'
import perfume2 from '../assets/images/shop_images/perfome2.jpg'
import perfume3 from '../assets/images/shop_images/perfome3.jpg'
import perfume4 from '../assets/images/shop_images/perfome4.jpg'

import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContextValue';




const products = [
  {
    id: '1',
    name: "Elegant Floral Dress",
    price: 19.99,
    images: [dress, dress1, dress2, dress3],
    description: "Flowy and comfortable, perfect for any occasion.",
  },
  {
    id: '2',
    name: "Casual Linen Top",
    price: 14.5,
    images: [top1, top2, top3, top4],
    description: "Lightweight and breathable for everyday style.",
  },
    {
    id: '3',
    name: "Classic Denim Jacket",
    price: 29.5,
    images: [jacket1, jacket2, jacket3, jacket4],
    description: "A timeless piece to elevate any outfit.",
  },
  {
    id: '4',
    name: "Classic Denim Jacket",
    price: 22.5,
    images: [jean1, jean2, jean3, jean4],
    description: "A timeless piece to elevate any outfit.",
  },
  {
    id: '5',
    name: "Ultra-Hydrating Serum",
    price: 55.99,
    images: [serum1, serum2, serum3, serum4],
    description: "Deeply moisturizes and plumps your skin.",
  },
    {
    id: '6',
    name: "Vibrant Eyeshadow Palette",
    price: 55.99,
    images: [eyeshow1, eyeshow2, eyeshow3, eyeshow4],
    description: "reate endless eye looks with our rich pigments.",
  },
   {
    id: '7',
    name: "signature Eau de Parfum",
    price: 19.99,
    images: [perfume1, perfume2, perfume3,perfume4],
    description: "A unique and long-lasting fragrance.",
  },
  
  
];

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
   const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) return <div className="text-center mt-10 text-red-600 text-xl">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 mt-15">
      {/* Left section: Main image + thumbnails */}
      <div className="flex-1">
   <img src={selectedImage} alt="Main" className="w-full max-w-md h-[350px] object-cover rounded-lg shadow-md mx-auto ml-0"/>
        <div className="flex gap-2 mt-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-27 h-25 object-cover rounded-md border cursor-pointer transition-transform duration-200 hover:scale-105 ${
                selectedImage === img ? 'border-black' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right section: Product info */}
      <div className="flex-1 mr-40">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

        <label className="block mb-1 text-sm font-medium">Select Size</label>
        <select className="border p-2 mb-4 w-40 rounded">
          <option value="">Select size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <div className="flex items-center gap-3 mb-6">
          <input
  type="number"
  value={quantity}
  min={1}
  onChange={(e) => setQuantity(Number(e.target.value))}
  className="w-16 border rounded p-2"
/>

          <button
  onClick={() => addToCart(product, quantity)}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
>
  ADD TO CART
</button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Product Details</h3>
        <p className="text-gray-600 leading-relaxed">
          {product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam magni veniam quasi quidem commodi hic iusto provident.
        </p>
      </div>
    </div>
  );
}
export default ProductDetails
