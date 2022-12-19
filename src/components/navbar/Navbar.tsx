import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full px-4 z-50">
        <nav className="flex justify-between text-lg md:py-8 py-4 md:px-8 px-0">
          <Link to="/" className="uppercase">
            <div className="flex gap-4">
              <span className="text-neutral-300">Name Surname</span>
              <span className="text-gray-500 md:block hidden">
                Director of photography
              </span>
            </div>
          </Link>
          <button onClick={handleMenu} className="strike-anim">
            MENU
          </button>
        </nav>
      </header>
      <Menu isOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
