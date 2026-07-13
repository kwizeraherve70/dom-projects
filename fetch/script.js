fetch(URL,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"john doe",
        age: 21
    })
})