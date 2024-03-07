import Input from "./Input"

export default function NewProject() {
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