import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-hook-form";

const FetchingUser = () => {
  const [users, setUser] = useState([]);
  const [errors, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {errors && <p className="text-red-800">{errors}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchingUser;
