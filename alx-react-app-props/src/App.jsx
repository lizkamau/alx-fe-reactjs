import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext"; // ✅ Import the context

function App() {
  // ✅ Data you want to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // ✅ Wrap the child components with the Context Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
