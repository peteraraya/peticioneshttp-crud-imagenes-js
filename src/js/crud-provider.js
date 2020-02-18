
const urlCRUD = 'https://reqres.in/api/users';

// Metodo

const getUsuario = async(id) =>{ 
    // Recibir el id del usuario
    const resp = await fetch(`${ urlCRUD }/${ id }`);

    const {data} = await resp.json();

    return data;
};

const crearUsuario =  async( usuario )=>{
    // referencia al (arg1)url, (arg2)configuraciones de fetch
    const resp = await fetch(urlCRUD,{
        method: 'POST',
        body:JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
    });

    // console.log(await resp.json());

    return await resp.json();
};

const actualizarUsuario = async (id,usuario) => {
    // referencia al (arg1)url, (arg2)configuraciones de fetch
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // console.log(await resp.json());

    return await resp.json();
};


const borrarUsuario = async(id) => {
    
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    // Pregunto si quiero borrar con un operador ternario
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
};



export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}