import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  const menuItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'All work',
      path: '/work',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  const links = [
    {
      name: 'Vimeo',
      href: '#',
    },
    {
      name: 'Instagram',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ];

  const bgVariants = {
    closed: {
      y: '-100%',
      transition: {
        ease: [0.74, 0.2, 0.76, 1],
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0.74, -0.2, 0.76, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`fixed h-full w-full z-40 top-0 left-0 ${
        !isOpen ? 'pointer-events-none' : ''
      }`}
    >
      <motion.div
        variants={bgVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute h-full w-full bg-secondary-gray -z-10"
      />
      <div className="flex flex-col h-full  md:py-14 py-10">
        <ul className="flex flex-1 flex-col items-center justify-center">
          {menuItems.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ y: 30 + 30 * i, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : {}}
              exit={{ y: 30 + 30 * i, opacity: 0 }}
              transition={{
                delay: isOpen ? 0.3 : 0,
                duration: 0.5,
                ease: 'easeInOut',
                opacity: {
                  duration: 0.25,
                },
              }}
            >
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="relative"
              >
                <span className="absolute -left-5 text-lg space-x-0 z-0 hover-link">
                  0{i}
                </span>
                <span className="text-8xl uppercase hover-link strike-anim">
                  {item.name}
                </span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          transition={{
            delay: isOpen ? 0.4 : 0,
            duration: isOpen ? 0.4 : 0.1,
            ease: 'easeInOut',
          }}
          className="flex w-full md:px-12 px-4 justify-between"
        >
          <span className="uppercase">Director of photography</span>
          <div className="flex gap-3">
            {links.map((link) => (
              <a href={link.href} className="uppercase">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
