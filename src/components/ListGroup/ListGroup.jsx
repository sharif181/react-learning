import { useState } from "react";

const ListGroup = ({ productList, onClick }) => {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <>
      <p>This is my product list</p>
      <ul className="list-none">
        {productList.map((product, index) => (
          <li
            className={
              selectedIndex === index
                ? "bg-yellow-500 list-item text-black p-2 m-2"
                : "bg-blue-400 list-item text-black p-2 m-2"
            }
            key={product}
            onClick={() => setIndex(index)}
          >
            <div className="flex justify-between items-center">
              <p>{product}</p>
              <button
                onClick={() => onClick(product)}
                className="py-4 px-6 rounded-2xl text-white bg-red-900"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
