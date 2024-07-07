import React, { useEffect, useState } from "react";

const Shop = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const useFetching = (callback) => {
    const fetching = async (...args) => {
      try {
        setIsLoading(true);
        await callback(...args);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    return [fetching, isLoading, error];
  };

  const [fetchUsers, isUserLoading, postError] = useFetching(async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      setUsers(json);
    }
  });

  useEffect(() => {
    fetchUsers("http://localhost:5000/api/users");
  }, []);

  return (
    <div>
      {isUserLoading ? (
        <h1>Loading</h1>
      ) : (
        users.map((user) => (
          <div>
            <h4>{user.id}</h4>
            <p>{user.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Shop;
