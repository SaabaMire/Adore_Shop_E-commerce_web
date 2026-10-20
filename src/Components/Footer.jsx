import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-pink-500 shadow-sm">
      <div className="w-full mx-auto max-w-screen-xl p-10 md:flex md:items-center md:justify-between">
        
        <span className="text-semi-bold text-white sm:text-center dark:text-white">
          © 2025  All Rights Reserved Adore.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-font-meduim font-medium text-white dark:text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline mr-4 md:mr-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline mr-4 md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
        
      </div>
    </footer>
  );
}
