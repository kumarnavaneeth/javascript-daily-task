const fs=require('fs').promises;
async function getQuestions(){
    const data=await fs.readFile('./data/questionData.json','utf-8');
    return JSON.parse(data);
}
module.exports={getQuestions};
