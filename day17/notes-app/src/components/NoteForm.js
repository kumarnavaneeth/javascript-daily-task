import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function NoteForm({ addNote }) {
    const [error, setError] = useState("");
    const navigate=useNavigate();
    const [note, setNote] = useState({
        title: "",
        content:"",
        status: "created",
        dateTime:""
    });
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (!note.title.trim()) {
            setError("invalid title input");
            return;
        }
        if(!note.content.trim()){
            setError("invalid content input");
            return;
        }
        if(!note.dateTime.trim()){
            setError("date time is required");
            return;
        }
        const noteToSend={
            ...note,
            dateTime:note.dateTime
            ? new Date(note.dateTime).toISOString()
            :null
        }
        const saveNote = await sendPostRequest(noteToSend);
        addNote(saveNote);
        setNote({ title: "",content:"", status: "created",dateTime:"" });
        setError("");
        navigate('/');
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
            placeholder="enter content"
            onChange={handleChange}
            />
            <label>Status<input name="status"
                type="checkbox"
                checked={note.status === 'closed'}
                onChange={handleChange}></input></label>
            <input type='datetime-local'
            name='dateTime'
            value={note.dateTime}
            onChange={handleChange}
            ></input>
            <button>Add</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </form>
    );
}
export default NoteForm;