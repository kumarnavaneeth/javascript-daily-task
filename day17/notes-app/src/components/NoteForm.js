import { useState } from "react";

function NoteForm({addNote}){
const [note,setNote]=useState({
    title:"Test Note",
    status:"created"
});
const handleSubmit =(e)=>{
    e.preventDefault();
    //if(!note.trim()) return;
    addNote(note);
    //setNote("");
}
return(
    <form onSubmit={handleSubmit}>
        <input placeholder="enter note"
        value={note.title}
        onChange={(e)=>setNote({...note,title:e.target.value})}
        />
        <input value={note.status} onChange={(e)=>setNote({...note,status:e.target.value})}
        />
        <button>Add</button>
    </form>
);
}
export default NoteForm;