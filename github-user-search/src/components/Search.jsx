// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // useState
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // preventDefault
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(username);
    if (data) setUser(data);
    else setError("Looks like we can't find the user.");

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* form + onSubmit */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // target.value
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button> {/* button */}
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
