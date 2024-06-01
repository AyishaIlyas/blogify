import React, { useState } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(path);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (section) => {
    setDropdownOpen(false);
    setActiveSection(section);
  };

  return (
    <Navbar className="border-b-2 flex items-center justify-between p-4">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-green-900 via-red-900 to-black rounded-lg text-white">
          Blogify
        </span>
      </Link>

      {/* Search Box and Button (Visible on Larger Screens) */}
      <form className="hidden lg:flex items-center ml-4 relative">
        <div className="relative">
          <TextInput
            type="text"
            placeholder="Search..."
            className="pr-10 pl-3 py-2 w-64 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <AiOutlineSearch size={20} />
          </div>
        </div>
      </form>

      {/* Search Icon Only (Visible on Smaller Screens) */}
      <Button className="lg:hidden ml-4" color="gray">
        <AiOutlineSearch size={24} />
      </Button>

      {/* Items Aligned Between Search and Sign In */}
      <div className="flex gap-2 md:order-2 lg:flex lg:items-center">
        {/* Moon Icon (Visible on Smaller Screens) */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <FaMoon />
        </Button>

        {/* Navbar Links (Visible on Larger Screens) */}
        <div className="hidden lg:flex gap-4">
          <Link to="/" onClick={() => handleLinkClick('/')} className={activeSection === '/' ? 'text-blue-500' : ''}>Home</Link>
          <Link to="/about" onClick={() => handleLinkClick('/about')} className={activeSection === '/about' ? 'text-blue-500' : ''}>About</Link>
          <Link to="/projects" onClick={() => handleLinkClick('/projects')} className={activeSection === '/projects' ? 'text-blue-500' : ''}>Projects</Link>
        </div>

        {/* Sign In Button */}
        <Link to="/sign-in">
          <Button>
            <span className="px-2 py-1 bg-gradient-to-r from-green-800 to-red-800">Sign In</span>
          </Button>
        </Link>

        {/* Navbar Toggle (Dropdown Menu for Smaller Screens) */}
        <Button className="lg:hidden" onClick={handleDropdownToggle}>
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="lg:hidden w-full bg-white shadow-md mt-2 rounded-lg absolute top-16 left-0 z-10">
            <Link to="/" className={`block px-4 py-2 text-gray-800 ${activeSection === '/' ? 'bg-blue-200' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
            <Link to="/about" className={`block px-4 py-2 text-gray-800 ${activeSection === '/about' ? 'bg-blue-200' : ''}`} onClick={() => handleLinkClick('/about')}>About</Link>
            <Link to="/projects" className={`block px-4 py-2 text-gray-800 ${activeSection === '/projects' ? 'bg-blue-200' : ''}`} onClick={() => handleLinkClick('/projects')}>Projects</Link>
          </div>
        )}
      </div>
    </Navbar>
  );
}
