import { useContext } from "react";
import UserContext from "./UserContext";


function UserDetails() {
  // Access user data from the context
  const userData = UserContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
