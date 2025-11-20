// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data) {
        setUser(data);
      } else {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      console.error(err);
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }

    setUsername(""); // clear input
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div style={styles.userCard}>
          <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "20px" },
  form: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  input: { padding: "8px", width: "250px", borderRadius: "4px 0 0 4px", border: "1px solid #ccc" },
  button: { padding: "8px 16px", borderRadius: "0 4px 4px 0", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" },
  userCard: { marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px", display: "inline-block", textAlign: "center" },
  avatar: { width: "100px", borderRadius: "50%" }
};

export default Search;
