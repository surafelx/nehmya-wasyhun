import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import ArrowLeft from '../../assets/arrow-left.svg';
import { motion } from 'framer-motion';
import useScrollPosition from '../../hooks/useScrollPosition';

const MotionLink = motion(Link);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollY = useScrollPosition();

  const handleMenu = (state: boolean) => {
    setIsMenuOpen(state);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 mix-blend-difference">
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: isMenuOpen ? 15 : 0 }}
          className="flex justify-between text-lg md:py-8 py-4 md:px-12 pl-6 md:pr-12 pr-8"
        >
          {location.pathname.includes('/work/') ? (
            <Link
              to="/"
              className="flex uppercase"
              onClick={() => handleMenu(false)}
            >
              <img src={ArrowLeft} className="hover-link" />
              <span className="hover-link">Back</span>
            </Link>
          ) : (
            <MotionLink
              animate={{
                y: scrollY > 190 && !isMenuOpen ? -15 : 0,
                opacity: scrollY > 190 && !isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              to="/"
              className="uppercase"
              onClick={() => handleMenu(false)}
            >
              <div className="flex gap-4">
                <span className="text-neutral-300 hover-link">
                  RAPHAËL BOURDIN
                </span>
                <span className="text-gray-500 md:block hidden hover-link">
                  Director of photography
                </span>
              </div>
            </MotionLink>
          )}
          <button
            onClick={() => handleMenu(!isMenuOpen)}
            className={`strike-hover hover-link before:bg-primary ${
              isMenuOpen ? 'active' : ''
            }`}
          >
            MENU
          </button>
        </motion.nav>
      </header>
      <Menu
        isOpen={isMenuOpen}
        setIsOpen={(state: boolean) => handleMenu(state)}
      />
    </>
  );
};

export default Navbar;
