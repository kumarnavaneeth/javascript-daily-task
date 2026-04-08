import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
function App() {
const [questions,setQuestions]=useState([]);
useEffect(()=>{
  fetchQuestions();
},[])

async function fetchQuestions()
{
  const response=await axios.get('http://localhost:3000/forms');
  setQuestions(response.data);
  console.log(response.data);
  
}
  return (
    <div className="App">
    <h2>Security Questions</h2>
    <InputForm questions={questions}/>
    </div>
  );
}

export default App;
