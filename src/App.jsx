import Form from "./components/ExpressTracker/Form/Form";
import { useState, useEffect } from "react";
import { CostTable } from "./components/ExpressTracker/Table/CostTable";
import FilterCosts from "./components/ExpressTracker/FilterCosts/FilterCosts";
import LeanringUseEffect from "./components/ConnectWithBackend/LeanringUseEffect";
import axios from "axios";
import FetchingUser from "./components/ConnectWithBackend/FetchingUser";
import UseEffectCleanUp from "./components/ConnectWithBackend/UseEffectCleanUp";
import CancellingRequest from "./components/ConnectWithBackend/CancellingRequest";
import UseApiService from "./components/ConnectWithBackend/UseApiService";
import UseUserService from "./components/ConnectWithBackend/UseUserService";

// function App() {
//   const [costs, setCosts] = useState([]);
//   const [selectedCatory, setSelectedCatory] = useState("all");
//   const category = [
//     "Bank Loan",
//     "Wife Monthly Expense",
//     "Groceries",
//     "House Rent",
//     "Utilities",
//     "For Parents & Sister",
//     "For Restuarents",
//   ];

//   const handleFormSubmit = (data) => {
//     data.id = costs.length + 1;
//     setCosts([...costs, data]);
//   };

//   const handleDelete = (data) => {
//     setCosts(costs.filter((cost) => cost.id !== data.id));
//   };

//   const handleSelectedCategory = (data) => {
//     setSelectedCatory(data);
//   };

//   const visibleCosts =
//     selectedCatory !== "all"
//       ? costs.filter((e) => e.category === selectedCatory)
//       : costs;

//   return (
//     <div className="flex flex-col items-center p-10">
//       <Form categories={category} handleFormSubmit={handleFormSubmit} />
//       <FilterCosts
//         categories={category}
//         handleSelectedCategory={handleSelectedCategory}
//       />
//       <CostTable costs={visibleCosts} handleDelete={handleDelete} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <UseUserService />
    </div>
  );
}

export default App;
