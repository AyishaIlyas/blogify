import React, { useState } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <style>
        {`
          .navbar-link {
            position: relative;
            text-decoration: none;
          }
          .navbar-link::before {
            content: none;
          }
        `}
      </style>
      <Navbar className='border-b-2 flex items-center justify-between p-4'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-green-900 via-red-900 to-black rounded-lg text-white'>
            Blogify
          </span>
        </Link>

        {/* Search Box and Button (Visible on Larger Screens) */}
        <form className='hidden lg:flex items-center ml-4' style={{ width: 'auto' }}>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            
          />
        </form>

        {/* Search Icon Only (Visible on Smaller Screens) */}
        <Button className='lg:hidden ml-4' color='gray'>
          <AiOutlineSearch size={24} />
        </Button>

        {/* Items Aligned Between Search and Sign In */}
        <div className='flex gap-2 md:order-2 lg:flex lg:items-center'>
          {/* Moon Icon (Visible on Smaller Screens) */}
          <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <FaMoon />
          </Button>

          {/* Navbar Links (Visible on Larger Screens) */}
          <div className='hidden lg:flex gap-4'>
            <Navbar.Link active={path === '/'} as={'div'} className='navbar-link'>
              <Link to='/' onClick={handleLinkClick} className={path === '/' ? 'text-blue-500' : ''}>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'} className='navbar-link'>
              <Link to='/about' onClick={handleLinkClick} className={path === '/about' ? 'text-blue-500' : ''}>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'} className='navbar-link'>
              <Link to='/projects' onClick={handleLinkClick} className={path === '/projects' ? 'text-blue-500' : ''}>Projects</Link>
            </Navbar.Link>
          </div>

          {/* Sign In Button */}
          <Link to='/sign-in'>
            <Button>
              <span className='px-2 py-1 bg-gradient-to-r from-green-800 to-red-800'>Sign In</span>
            </Button>
          </Link>

          {/* Navbar Toggle (Dropdown Menu for Smaller Screens) */}
          <Navbar.Toggle className='lg:hidden' onClick={handleDropdownToggle} />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='lg:hidden w-full bg-gray-100'>
              <Navbar.Link active={path === '/'} as={'div'} className='navbar-link'>
                <Link to='/' className={path === '/' ? 'text-blue-500' : ''} onClick={handleLinkClick}>Home</Link>
              </Navbar.Link>
              <Navbar.Link active={path === '/about'} as={'div'} className='navbar-link'>
                <Link to='/about' className={path === '/about' ? 'text-blue-500' : ''} onClick={handleLinkClick}>About</Link>
              </Navbar.Link>
              <Navbar.Link active={path === '/projects'} as={'div'} className='navbar-link'>
                <Link to='/projects' className={path === '/projects' ? 'text-blue-500' : ''} onClick={handleLinkClick}>Projects</Link>
              </Navbar.Link>
            </div>
          )}
        </div>
      </Navbar>
    </>
  );
}
