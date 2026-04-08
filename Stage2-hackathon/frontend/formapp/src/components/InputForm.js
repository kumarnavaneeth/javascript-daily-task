import { useState } from "react";

function InputForm({ questions }) {
    const [selectedQuestion, setSelectedQuestion] = useState('');

    return (
        <>
            <select value={selectedQuestion}
                onChange={(e) => setSelectedQuestion(e.target.value)}
            >
                <option value="">please select option</option>
                {questions.map((question) => {
                    return <option value={question.id}>{question.question}</option>
                })}
            </select>
            <br/>
            <input type="text"
             placeholder="Answer"
             />
             <input type="text"
             placeholder="Confirm Answer"/>
        </>
    )
}
export default InputForm;