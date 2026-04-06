function NoteItem({note,deleteNote}){
return(
    <li>
        {note.title},
        {note.content},
        {note.status}
        {note.dateTime?
        new Date(note.dateTime).toLocaleString("en-GB") : "no date selected" }
        <button onClick={()=>deleteNote(note.id)}>Delete</button>
    </li>
);
}
export default NoteItem;