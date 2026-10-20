import React from 'react'
import store from '..//assets/images/store.jpeg'
import logo from '../assets/images/Logo.png'

export const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to a place where style meets passion. We're dedicated to helping you find the perfect pieces that make you feel confident and beautiful.
          </p>
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4  text-pink-900">From a Dream to Reality</h2>
            <p className="mb-4 text-gray-700">
              Our journey began with a simple idea: to create a curated collection of clothing and accessories that celebrate the modern woman. We believe fashion is more than just clothes; it's a form of self-expression. Every item in our store is hand-picked with love, focusing on quality, style, and uniqueness.
            </p>
            <p className="text-gray-700">
              We started small, working from a home studio, driven by the desire to bring accessible, elegant fashion to women everywhere. Today, we're proud to serve a community of amazing women who inspire us daily.
            </p>
          </div>
          <div className="order-1 md:order-2 ">
            <img
              src={store}
              alt="A woman choosing clothes in a store"
              className="mx-auto h-72 w-full max-w-2xl rounded-lg object-cover shadow-lg sm:h-96"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16  dark:bg-gray-200 ">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Our mission is simple: to provide a seamless shopping experience with products that empower you. We are committed to offering high-quality, stylish, and comfortable items that fit your lifestyle. We stand for **inclusivity, authenticity, and confidence**, because every woman deserves to look and feel her best.
          </p>
        </div>

        {/* Meet the Team/Founder Section (optional but recommended) */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet the Founder</h2>
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="Founder of the brand"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-900"></h3>
            <p className="text-sm text-gray-500 mb-4">Founder & Creative Director</p>
            <p className="text-gray-700 max-w-xl mx-auto">
              Adora's passion for fashion and her vision to create a brand that truly understands women's needs are at the heart of our company. Her belief in timeless style and exceptional quality guides everything we do.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}
export default About
