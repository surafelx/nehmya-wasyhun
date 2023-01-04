import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  menuItems: { name: string; path: string }[];
  socialLinks: { name: string; href: string }[];
}

const Menu = ({ isOpen, setIsOpen, menuItems, socialLinks }: MenuProps) => {
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
      data-testid="menu"
      className={`fixed h-full w-full z-40 top-0 left-0 ${
        !isOpen ? 'pointer-events-none' : ''
      }`}
    >
      <motion.div
        variants={bgVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute h-full w-full bg-primary -z-10"
      />
      <div className="flex flex-col h-full  md:py-14 py-10 text-secondary-black">
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
              className="my-4"
            >
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="relative flex strike-hover opacity-80 
                  [&.active]:opacity-100 hover:opacity-100 transition-colros duration-500"
              >
                <span className="absolute -left-5 text-lg hover-link">
                  0{i + 1}
                </span>
                <span className="md:text-8xl text-5xl uppercase hover-link">
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
          <span className="uppercase md:block hidden">
            Director of photography
          </span>
          <div className="flex gap-3 justify-around md:flex-none flex-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                className="uppercase strike-hover hover-link"
              >
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
