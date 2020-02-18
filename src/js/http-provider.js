const jokerUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

//cloudinary

const cloudPreset = "a3wv8yyl";
const cloudUrl = "https://api.cloudinary.com/v1_1/drqle8tn3/upload";

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokerUrl);

    if (!resp.ok) throw "No se pudo realizar la petición";

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();

  return usuarios;
};

// Archivos subir : File
const subirImagen = async archivosSubir => {
  const formData = new FormData(); // es un objeto que está listo para hacer posteos
  // agregamos configuración
  formData.append("upload_preset", cloudPreset);
  formData.append("file", archivosSubir);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
    //   console.log(cloudResp);
      return cloudResp.secure_url;
      // return
    } else {
      // dio un error en la carga - necesitamos atrapar el error
      throw await resp.json();
    }
  } catch (error) {
    throw err;
  }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };
