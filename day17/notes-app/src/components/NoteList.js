import { useState } from "react";
import NoteItem from "./NoteItem"
import NotesbarChart from "./NotesBarChart";

function NoteList({ notes, deleteNote }) {
const[searchItem,setSearchItem]=useState('');
const filteredNotes=notes.filter(note=>note.title.toLowerCase().includes(searchItem.toLowerCase()))
const [sortType,setSortType]=useState(null);
const sortedNotes=[...filteredNotes].sort((value1,value2)=>{
    if(!sortType) return;
    if(sortType=='title'){
        const valueA=value1.title.toLowerCase();
        const valueB=value2.title.toLowerCase();
        if(valueA<valueB)return -1;
        if(valueA>valueB) return 1;
         return 0;
    }
    if(sortType=='priority'){
        return value1.priority-value2.priority;
    }
    return 0;
})
const handleSort=(type)=>{
    setSortType(type);
}
    return (
        <div>
            <div className="search-field">
            <input type='search'
            placeholder="enter title to search"
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}/>
            </div>
            <div className="sort-button">
                <button onClick={()=>handleSort('title')}>SortBy Title</button>
                <button onClick={()=>handleSort('priority')}>SortBy Priority</button>
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
            {sortedNotes.map((note) => (
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
            ))}
            </tbody>
        </table>
<NotesbarChart notes={notes}/>
        </div>
        
    );
}
export default NoteList;