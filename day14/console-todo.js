const fs = require('fs').promises;

async function readFile(){
try {
    const data=await fs.readFile('data.txt','utf8');
    console.log(data);
} catch (error) {
    console.error(error);
}
}
async function writeFile(){
    try {
       await fs.writeFile('data.txt','writing file using nodejs'); 
       console.log('file written');
    } catch (error) {
        console.error(error);
    }
}
async function appendFile(){
await fs.appendFile('data.txt','\nappending new content..');
}
async function deleteFile(){
    await fs.unlink('data1.txt');
}

async function run(){
    await readFile();
    await writeFile();
    await appendFile();
    await deleteFile();
}
run()

