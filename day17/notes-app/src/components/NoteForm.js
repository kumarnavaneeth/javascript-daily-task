import { useState } from "react";
import axios from 'axios';
function NoteForm({ addNote }) {
    const [error, setError] = useState("");
    const [note, setNote] = useState({
        title: "",
        content:"",
        status: "created"
    });
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (!note.title.trim()|| !note.content.trim()) {
            setError("invalid title input");
            return;
        }
        const saveNote = await sendPostRequest(note);
        addNote(saveNote);
        setNote({ title: "",content:"", status: "created" });
        setError("");
    }
    const sendPostRequest=async (noteData)=>{
        const response =await axios.post("http://localhost:3001/notes",noteData,{
            headers:{
                "content-type":"application/json",
            }
        });
        return response.data;
    }
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: type === "checkbox" ? (checked ? "closed" : "created") : value,
        }));
       if(name==='title' && value.trim()){
        setError("");
       }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name ='title'
            value={note.title}
            placeholder="enter note"
                onChange={handleChange}
            />
            <input name='content'
            value={note.content}
            placeholder="enter contnt"
            onChange={handleChange}
            />
            <label>Status<input name="status"
                type="checkbox"
                checked={note.status === 'closed'}
                onChange={handleChange}></input></label>
            <button>Add</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </form>
    );
}
export default NoteForm;