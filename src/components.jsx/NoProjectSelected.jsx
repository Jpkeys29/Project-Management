import noProjectImage from '../assets/no-projects.png';

export default function NoProjectSelected() {
    return (
        <div>
            <img src={noProjectImage}/>
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <button>Create a new project</button>
            </p>
        </div>
    )
}