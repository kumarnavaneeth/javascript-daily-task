import { useState } from "react";
import NoteItem from "./NoteItem"

function NoteList({ notes, deleteNote }) {
const[searchItem,setSearchItem]=useState('');
const filteredNotes=notes.filter(note=>note.title.toLowerCase().includes(searchItem.toLowerCase()))

    return (
        <div>
            <div className="search-field">
            <input type='search'
            placeholder="enter title to search"
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}/>
            </div>
        <table className="notes-app">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>DateTime</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {filteredNotes.map((note) => (
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
            ))}
            </tbody>
        </table>
        </div>
    );
}
export default NoteList;