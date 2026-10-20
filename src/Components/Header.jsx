import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo-cropped.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/cart', label: 'Cart' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 h-20 bg-pink-600 shadow-md">
        <div className="relative mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 lg:justify-start">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center">
            <img src={logo} className="h-16 w-auto sm:h-[4.5rem]" alt="Adora home" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-white lg:hidden"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
            id="primary-navigation"
            className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full bg-pink-600 px-4 pb-4 shadow-md lg:absolute lg:left-1/2 lg:right-auto lg:top-1/2 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-7">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-pink-700 lg:px-0 lg:py-2 lg:hover:bg-transparent lg:hover:text-pink-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
