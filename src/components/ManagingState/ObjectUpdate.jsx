import { useState } from "react";
import { produce } from "immer";

const ObjectUpdate = () => {
  //   const [product, setProduct] = useState({
  //     name: "product1",
  //     price: 10,
  //     address: {
  //       street: "abc",
  //       phone: 321,
  //     },
  //   });

  //   const [productList, setProductList] = useState(["product1", "product2"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: "false" },
    { id: 2, title: "bug2", fixed: "false" },
  ]);

  // it will work
  const handleClick = () => {
    // setProduct({
    //   ...product,
    //   name: "product2",
    //   address: {
    //     ...product.address,
    //     phone: 0,
    //   },
    // });
    // add new item
    // setProductList([...productList, "product" + (productList.length + 1)]);
    // remove item
    // setProductList(productList.filter((product) => product !== "product1"));
    // update item
    // setProductList(
    //   productList.map((product) =>
    //     product === "product1" ? "product changed" : product
    //   )
    // );

    // update list of object
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: "true" } : bug))
    // );

    // using immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = "true";
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.fixed}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className="py-2 px-4 rounded-2xl bg-green-700 text-white"
      >
        Update
      </button>
    </div>
  );
};

export default ObjectUpdate;
