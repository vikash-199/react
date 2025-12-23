import { useContext } from "react";
import { UserContext } from "./UserContext";
function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Name: {user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Profile;
