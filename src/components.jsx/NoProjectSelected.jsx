import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div>
            <img src={noProjectImage}/>
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject} >Create a new project</Button>
            </p>
        </div>
    )
}