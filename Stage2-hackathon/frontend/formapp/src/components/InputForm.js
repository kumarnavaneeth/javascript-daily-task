import { useState } from "react";

function InputForm({ questions,selected,onchange,selectedQuestions,hideAnswer,index,
  answer,
  confirmAnswer,
  onAnswer,
  onConfirmAnswer }) {

const filteredQuestions=questions.filter(
    (question)=>
        !selectedQuestions.includes(question.id)||
         question.id === selected
)
    return (
        <>
            <select value={selected ?? ''}
                onChange={(e) => onchange(Number(e.target.value))}
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
             onChange={(e)=>onAnswer(index,e.target.value)}
             />
             <input type={hideAnswer? "password":"text"}
             placeholder="Confirm Answer"
             value={confirmAnswer}
             onChange={(e)=>onConfirmAnswer(index,e.target.value)}
             />

             <br/>
        </>
    )
}
export default InputForm;