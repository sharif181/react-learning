import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../../services/api-client";

const UseApiService = () => {
  const [users, setUser] = useState([]);
  const [errors, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return (
    <>
      {errors && <p className="text-red-800">{errors}</p>}
      {loading && <p>loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
export default UseApiService;
