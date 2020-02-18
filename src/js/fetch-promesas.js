const jokerUrl = 'https://api.chucknorris.io/jokes/random';
// Realizar endpoint
// fetch( jokerUrl ).then( resp => {
    

//     // resp.json().then( data =>{
//     //     console.log(data.id);
//     //     console.log(data.value)        
//     // });
//     // destructuración

//     resp.json().then(({id,value}) => {
//         console.log(id);
//         console.log(value)
//     });
    
// });


//Promesas dentro de promesas
fetch( jokerUrl )
    .then( resp => resp.json())
        .then(( {id, value})=>{
            console.log(id,' - ',value);
        });