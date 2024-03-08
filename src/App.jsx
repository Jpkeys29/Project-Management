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

let content;

if(projectState.selectedProjectId === null) {
  content = <NewProject />
} else if (projectState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
}

  return (
    <main className="container">
      <h1>Project Manager</h1>
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
