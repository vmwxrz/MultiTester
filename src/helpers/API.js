

export const POST = async() =>{
    await fetch("http://localhost:3000/api/clients/",{
        method: "POST",
        body: JSON.stringify({name:"perro",email:"email",genre:"male"}),
        mode:"cors",
   
        headers:{
            'Accept':'application/json',
            'Content-Type' : 'application/json'
        }
    })
}

export const GET = async() =>{
    return await fetch("http://localhost:3000/api/clients/",{
        method: "GET",
        mode:"cors",
        headers:{
            'Accept':'application/json',
            'Content-Type' : 'application/json'
        }
    })
}