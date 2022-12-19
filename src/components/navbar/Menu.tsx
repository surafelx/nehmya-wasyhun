interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div
      className={`py-10 fixed h-full w-full top-0 left-0 bg-secondary-gray z-40 -translate-y-full transition-all duration-500 ease-in-out ${
        isOpen ? '-translate-y-0' : ''
      }`}
    >
      <ul>
        <li>Menu Item</li>
      </ul>
    </div>
  );
};

export default Menu;
