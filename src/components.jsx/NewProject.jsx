import Input from "./Input"
import { useRef } from "react";

export default function NewProject() {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
    }

    return (
    <div>
        <menu>
            <ul><button>Cancel</button></ul>
            <li><button onClick={handleSave} >Save</button></li>
        </menu>
        <div>
            <Input ref={title} label="Description" textarea/>
            <Input ref={description} label="Title" />
            <Input ref={dueDate} label="Due Date" />
        </div>
    </div>
    );
}