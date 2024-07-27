import { useState } from "react";

const UseState = () => {
  const [isUpdated, setUpdated] = useState(false);
  let count = 0;
  const handleClick = () => {
    setUpdated(!isUpdated);
    count++;
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="py-2 px-4 rounded-2xl bg-green-700 text-white"
      >
        Update
      </button>
    </div>
  );
};

export default UseState;
