import Input from "./Input"
import { useRef } from "react";

export default function NewProject() {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    return (
    <div>
        <menu>
            <ul><button>Cancel</button></ul>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title" />
            <Input label="Description" textarea/>
            <Input label="Due Date" />
        </div>
    </div>
    );
}