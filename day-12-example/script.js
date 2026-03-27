setTimeout(()=>{
    console.log("step 1");
    setTimeout(()=>{
        console.log("step 2");
        setTimeout(()=>{
            console.log('step 3');
            
        },1000)
    },1000)
    
},10)