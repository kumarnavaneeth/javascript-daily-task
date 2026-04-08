import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
function App() {
  const [hideAnswer, setHideAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(
    Array(5).fill(null)
  )
  const [answers, setAnswers] = useState(Array(5).fill(''));
  const [confirmAnswers, setConfirmAnswers] = useState(Array(5).fill(''));
  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };
  const handleConfirmAnswer = (index, value) => {
    const updated = [...confirmAnswers];
    updated[index] = value;
    setConfirmAnswers(updated);
  };

  const handleSelect = (index, value) => {
    const updated = [...selectedQuestions];
    updated[index] = value;
    setSelectedQuestions(updated);
  };
  useEffect(() => {
    fetchQuestions();
  }, [])

  async function fetchQuestions() {
    const response = await axios.get('http://localhost:3000/forms');
    setQuestions(response.data);
    console.log(response.data);
  }
    const handleSubmit = async () => {
      console.log('clicked');
      
    const data = {
      answers: selectedQuestions.map((qId, i) => ({
        questionId: Number(qId),
        answer: answers[i]
      }))
    };
    console.log('sending',data);
    
  await axios.post('http://localhost:3000/forms', data);
  setSelectedQuestions(Array(5).fill(null));
  setAnswers(Array(5).fill(''));
  setConfirmAnswers(Array(5).fill(''));
  }
  return (
    <div className="App">
      <h2>Security Questions</h2>
      {Array.from({ length: 5 }).map((_, i) => (
        <InputForm key={i}
          questions={questions}
          selected={selectedQuestions[i]}
          onchange={(value) => handleSelect(i, value)}
          selectedQuestions={selectedQuestions}
          hideAnswer={hideAnswer}
          index={i}
          answer={answers[i]}
          confirmAnswer={confirmAnswers[i]}
          onAnswer={handleAnswer}
          onConfirmAnswer={handleConfirmAnswer}
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
