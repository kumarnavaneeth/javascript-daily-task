import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function NoteForm({ addNote }) {
    // const [showModal,setShowModal]=useState(false);
    const MaxTitleLength=20;
    const MaxContentLength=20;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        content: "",
        status: "created",
        dateTime: "",
        priority:0
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!note.title.trim()) {
            setError("invalid title input");
            return;
        }
        if (!note.content.trim()) {
            setError("invalid content input");
            return;
        }
        if (!note.dateTime.trim()) {
            setError("date time is required");
            return;
        }
        const noteToSend = {
            ...note,
            dateTime: note.dateTime
                ? new Date(note.dateTime).toISOString()
                : null
        }
        const saveNote = await sendPostRequest(noteToSend);
        addNote(saveNote);
        setNote({ title: "", content: "", status: "created", dateTime: "", priority: 0 });
        setError("");
        navigate('/');
    }
    const sendPostRequest = async (noteData) => {
        const response = await axios.post("http://localhost:3001/notes", noteData, {
            headers: {
                "content-type": "application/json",
            }
        });
        return response.data;
    }
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if((name=='title') && value.length>MaxTitleLength){
            return;
        }
        if(name=='content'&& value.length>MaxContentLength){
            return;
        }
        setNote((prevNote) => ({
            ...prevNote,
            [name]: type === "checkbox" ? (checked ? "closed" : "created") : value,
        }));
        if (name === 'title' || name=='content' && value.trim()) {
            setError("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='title'
                value={note.title}
                placeholder="enter note"
                onChange={handleChange}
            />
            <small>{note.title.length}/{MaxTitleLength}</small>
            <input name='content'
                value={note.content}
                placeholder="enter content"
                onChange={handleChange}
            />
            <small>{note.content.length}/{MaxContentLength}</small>
            <label>Status<input name="status"
                type="checkbox"
                checked={note.status === 'closed'}
                onChange={handleChange}></input></label>
            <input type='datetime-local'
                name='dateTime'
                value={note.dateTime}
                onChange={handleChange}
            />
            <label>
                {note.priority}
            </label>
            <input type="range"
                name="priority"
                min="0"
                max="10"
                step='1'
                value={note.priority}
                onChange={handleChange}
            />
            <button>Add</button>
            {/* {showModal &&
            <div className="modal-display">
                <div className="modal">
                    <p>Added successfully !!!</p>
                </div>
            </div>
            } */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
export default NoteForm;