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
  const [errors, setErrors] = useState(Array(5).fill(''));

  const handleAnswer = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    const err = [...errors];
    if (confirmAnswers[index] && value !== confirmAnswers[index]) {
      err[index] = 'Answers mismatched!';
    } else {
      err[index] = '';
    }
    setErrors(err);
  };
  const handleConfirmAnswer = (index, value) => {
    const updatedConfirm = [...confirmAnswers];
    updatedConfirm[index] = value;
    setConfirmAnswers(updatedConfirm);
    const err = [...errors];
    if (answers[index] && value !== answers[index]) {
      err[index] = 'Answers mismatched!';
    } else {
      err[index] = '';
    }
    setErrors(err);
  };

  const handleSelect = (index, value) => {
    const updated = [...selectedQuestions];
    updated[index] = value;
    setSelectedQuestions(updated);
    const err = [...errors];
    err[index] = '';
    setErrors(err);
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
    let newErrors = Array(5).fill('');
    let isValid = true;
    for (let i = 0; i < 5; i++) {
      if (!selectedQuestions[i]) {
        newErrors[i] = 'Please select  question';
        isValid = false;
      } else if (!answers[i]) {
        newErrors[i] = 'Answer is required';
        isValid = false;
      } else if (!confirmAnswers[i]) {
        newErrors[i] = 'Please confirm your answer';
        isValid = false;
      } else if (answers[i] !== confirmAnswers[i]) {
        newErrors[i] = 'Answers mismatched!';
        isValid = false;
      }
    }
    setErrors(newErrors);
    if (!isValid) return;
    const data = {
      answers: selectedQuestions.map((qId, i) => ({
        questionId: Number(qId),
        answer: answers[i]
      }))
    };
    console.log('sending', data);

    await axios.post('http://localhost:3000/forms', data);
    setSelectedQuestions(Array(5).fill(null));
    setAnswers(Array(5).fill(''));
    setConfirmAnswers(Array(5).fill(''));
    setErrors(Array(5).fill(''));
  }
  const isFormValid = () => {
    for (let i = 0; i < 5; i++) {
      if (!selectedQuestions[i]) return false;
      if (!answers[i]) return false;
      if (!confirmAnswers[i]) return false;
      if (answers[i] !== confirmAnswers[i]) return false;
    }
    return true;
  };
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
          error={errors[i]}
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
      <button onClick={handleSubmit}
        disabled={!isFormValid()}
        className={!isFormValid() ? 'disabled-btn' : ''}
      >Submit</button>
    </div>
  );
}

export default App;
