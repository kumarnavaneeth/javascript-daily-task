function NoteItem({note,deleteNote}){
return(

    <tr>
        <td>{note.title}</td>
        <td>{note.content}</td>
        <td>{note.status}</td>
        <td>{note.dateTime?
        new Date(note.dateTime).toLocaleString("en-GB") : "no date selected" }</td>
        <td>{note.priority}</td>
        <td><button onClick={()=>deleteNote(note.id)}>Delete</button></td>
    </tr>
);
}
export default NoteItem;