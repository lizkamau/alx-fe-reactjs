// src/components/Search.jsx
import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // array now
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUsers([]);

    const data = await fetchUsers(username);
    if (data.length > 0) {
      setUsers(data);
    } else {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Use map() to display multiple users */}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
