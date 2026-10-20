import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-pink-500 shadow-sm">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-4 py-7 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between">
        
        <span className="text-semi-bold text-white sm:text-center dark:text-white">
          © 2025  All Rights Reserved Adore.
        </span>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-white sm:text-base">
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
        
      </div>
    </footer>
  );
}
