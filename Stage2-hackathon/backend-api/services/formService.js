const fs=require('fs').promises;
async function getQuestions(){
    const data=await fs.readFile('./data/questionData.json','utf-8');
    return JSON.parse(data);
}
async function saveForm(form){
  const file = await fs.readFile('./data/formData.json', 'utf-8');
  const existingData = JSON.parse(file);
const newForm={
  userId:Date.now(),
  answers:form.answers
}
  existingData.push(newForm);
  await fs.writeFile('./data/formData.json', JSON.stringify(existingData, null, 2));
  return newForm;
}
module.exports={getQuestions,saveForm};
