import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";
function App() {
  const user = {
    name: "Vikash",
    role: "Frontent developer",
  };
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
