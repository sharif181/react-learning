import { useState, useEffect } from "react";
import axios, { CanceledError } from "axios";

const CancellingRequest = () => {
  const [users, setUser] = useState([]);
  const [errors, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
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

export default CancellingRequest;
