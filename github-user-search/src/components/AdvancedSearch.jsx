// src/components/AdvancedSearch.jsx
import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const AdvancedSearch = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mb-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md flex-1"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md flex-1"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md w-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-md flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h3 className="font-bold">{user.login}</h3>
            {user.location && <p>{user.location}</p>}
            <p>Repos: {user.public_repos || "N/A"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-1"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSearch;
