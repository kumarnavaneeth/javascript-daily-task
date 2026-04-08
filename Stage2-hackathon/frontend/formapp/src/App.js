import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
function App() {
  const [hideAnswer,setHideAnswer]=useState(false);
const [questions,setQuestions]=useState([]);
const[selectedQuestions,setSelectedQuestions]=useState(
  Array(5).fill('')
)
const handleSelect = (index, value) => {
  const updated = [...selectedQuestions];
  updated[index] = value;
  setSelectedQuestions(updated);
};
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
    {Array.from({length:5}).map((_,i)=>(
<InputForm key={i} 
questions={questions}
selected={selectedQuestions[i]}
onchange={(value)=>handleSelect(i,value)}
selectedQuestions={selectedQuestions}
hideAnswer={hideAnswer}
/>
    ))}
  <label>
    <input
      type="checkbox"
      checked={hideAnswer}
      onChange={() => setHideAnswer(!hideAnswer)}
    />
    Hide Answers
  </label>
    </div>
  );
}

export default App;
