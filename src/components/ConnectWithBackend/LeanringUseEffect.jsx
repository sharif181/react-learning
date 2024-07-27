import { useState, useEffect } from "react";
const LeanringUseEffect = ({ cateogry }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching products for category: ", cateogry);
    setProducts([...products, "add one"]);
  }, [cateogry]);

  return <div>LeanringUseEffect</div>;
};

export default LeanringUseEffect;
