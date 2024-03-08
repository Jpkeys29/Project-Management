import { useState } from "react";
import SideBar from "./components.jsx/Sidebar";
import NewProject from "./components.jsx/NewProject";
import NoProjectSelected from "./components.jsx/NoProjectSelected";

function App() {
  const[projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

function handleStartAddProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null,
    }
  });
}  

  return (
    <main className="container">
      <h1>Project Manager</h1>
      <SideBar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
