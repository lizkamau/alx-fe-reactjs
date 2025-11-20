// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (username.trim() === "") return; // Do nothing if input is empty
    onSearch(username); // Call the parent function
    setUsername(""); // Clear input after search
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

// Simple inline styles for demonstration
const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  input: {
    padding: "8px",
    width: "250px",
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "0 4px 4px 0",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default SearchBar;
