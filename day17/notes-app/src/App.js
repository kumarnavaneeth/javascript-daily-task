import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  // const addNote=(text)=>{
  //   const newNote ={id:Date.now(),text};
  //   setNotes([...notes,newNote]);
  // };
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:3001/notes');
    setNotes(response.data);
  };

  const addNote = (note) => {
    const newNote = { ...note };
    // newNote.id = Date.now();
      setNotes([...notes, newNote]);
  }
  const deleteNote =async (id) => {
    await axios.delete(`http://localhost:3001/notes/${id}`)
    fetchNotes();
  };
  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
