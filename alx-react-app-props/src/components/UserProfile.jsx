import { useContext } from "react"; // ✅ Import useContext from React
import UserContext from "../UserContext"; // ✅ Import the context

function UserProfile() {
  // ✅ Access shared data from the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
