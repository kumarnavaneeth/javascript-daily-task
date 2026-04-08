import { useState } from "react";

function InputForm({ questions,selected,onchange,selectedQuestions,hideAnswer }) {
const [answer,setAnswer]=useState('');
const [confirmAnswer,setConfirmAnswer]=useState('');
const filteredQuestions=questions.filter(
    (question)=>
        !selectedQuestions.includes(question.id.toString())||
         question.id.toString() === selected
)
    return (
        <>
            <select value={selected}
                onChange={(e) => onchange(e.target.value)}
            >
                <option value="">please select option</option>
                {filteredQuestions.map((question) => (
                    <option key={question.id} value={question.id}>{question.question}</option>
                ))}
            </select>
            <br/>
            <input type={hideAnswer? "password":"text"}
             placeholder="Answer"
             value={answer}
             onChange={(e)=>setAnswer(e.target.value)}
             />
             <input type={hideAnswer? "password":"text"}
             placeholder="Confirm Answer"
             value={confirmAnswer}
             onChange={(e)=>setConfirmAnswer(e.target.value)}
             />
             <br/>
        </>
    )
}
export default InputForm;