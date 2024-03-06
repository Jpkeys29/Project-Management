import SideBar from "./components.jsx/Sidebar";
import NewProject from "./components.jsx/NewProject";
import NoProjectSelected from "./components.jsx/NoProjectSelected";

function App() {
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
