import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal,setShowModal]=useState(false);
  const[selectedId,setSelectedId]=useState(null);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:3001/notes');
    setNotes(response.data);
  };

  const addNote = (note) => {
    const newNote = { ...note };
      setNotes([...notes, newNote]);
  }
  // const deleteNote =async (id) => {
  //   await axios.delete(`http://localhost:3001/notes/${id}`)
  //   fetchNotes();
  // };
const confirmDelete=async(id)=>{
  setSelectedId(id);
  setShowModal(true);
}
const handleDelete=async()=>{
  await axios.delete(`http://localhost:3001/notes/${selectedId}`);
  setShowModal(false);
  setSelectedId(null);
  fetchNotes();
}
const cancelDelete=async()=>{
  setShowModal(false);
  setSelectedId(null);
}

  return(
    <div>
      <BrowserRouter>
       <Navbar/>
       <div className='notes-app'>
        <h1>Notes App</h1>
      <Routes>
        <Route path="/add" element={<NoteForm addNote={addNote}/>}/>
        <Route path="/" element={<NoteList notes={notes} deleteNote={confirmDelete}/>}/>
      </Routes>
      </div>
      {showModal&&
      <div className='modal-display'>
        <div className='modal'>
          <p>Please confirm before you delete!</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      </div>
      }
      </BrowserRouter>
    </div>
  )
}

export default App;
