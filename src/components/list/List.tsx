interface ListProps {
  items: {
    label: string;
    value: string;
  }[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="uppercase">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex justify-between md:text-xl text-lg py-4 border-b border-gray-500 font-thin leading-5"
        >
          <span className="text-gray-400 text-left">{item.label}</span>
          <span className="text-right">{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
