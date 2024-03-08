import Button from "./Button"

export default function Sidebar({onStartAddProject}) {
    return <aside id="sidebar">
        <h2>Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject} >+ Add Project</Button>
        </div>
        </aside>
}