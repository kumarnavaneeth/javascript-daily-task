import NoteItem from "./NoteItem"

function NoteList({ notes, deleteNote }) {
    return (
        <table className="notes-app">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>DateTime</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
            ))}
            </tbody>
        </table>
    );
}
export default NoteList;