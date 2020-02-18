import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
  const html = `
        <h1 class="mt-5"> Subir archivos</h1>
        <hr>

        <label>Selecciona fotografía :</label>
        <input type="file" accept="image/png, image/jpeg" />


        <br>

        <img id="foto" class="img-thumbnail" scr="">
    
    `;
  // Crreación de elementos

  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);

  // Referencias

  inputFile = document.querySelector("input");
  imgFoto = document.querySelector("#foto");
};

// Listerner : apenas selccione la imagen quiero que carge la imagen

const eventos = () => {
  inputFile.addEventListener("change", event => {
    const file = event.target.files[0];
    // console.log(file);
    subirImagen(file).then(url => (imgFoto.src = url));
  });
};

export const init = () => {
  crearInputFileHtml();
  eventos();
};
