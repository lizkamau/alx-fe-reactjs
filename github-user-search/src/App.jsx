import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getUser } from "./services/github";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await getUser(username);
    setUser(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={150} />
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;
