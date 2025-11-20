// src/components/Search.jsx
import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";
import { fetchUserData } from "../services/githubService";
const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState(""); // <-- location state
  const [minRepos, setMinRepos] = useState(""); // optional
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    const data = await fetchAdvancedUsers({ username, location, minRepos });
    if (data.length > 0) setUsers(data);
    else setError("Looks like we cant find the user");

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Location input */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <h3>{user.login}</h3>
            {user.location && <p>{user.location}</p>}
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
