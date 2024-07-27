import { useState, useEffect } from "react";
import create from "../../services/user-service";
import { CanceledError } from "../../services/api-client";

const UseUserService = () => {
  const [users, setUser] = useState([]);
  const [errors, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const userService = create("/users");
    const { request, cancel } = userService.getAll();
    request
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
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

export default UseUserService;
