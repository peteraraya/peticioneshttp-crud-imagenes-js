import { obtenerChiste } from "./http-provider";

// Referencias
const body = document.body;
let btnOtro, olList; // necesito esperar que se construya el html

const crearChistesHtml = () => {
  const html = `
      <h1 class="mt-5">
        Chistes
    </h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group"> </ol>
    
    `;

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html;

    body.append(divChistes);
};

/**
 * Eventos necesarios
 */

 const eventos = () =>{
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');



    btnOtro.addEventListener('click',async() =>{
        // evitar el doble click
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        // evitar el doble click
        btnOtro.disabled = false;
        
    });
 }

 // Chiste { id, value}
 const dibujarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<strong>${ chiste.id}</strong> : ${chiste.value}`
    olItem.classList.add('list-group-item ');
     // insertamos
     olList.append(olItem);
     
}

export const init = () => {
    crearChistesHtml();
    eventos(); // deben ir despues de la construcción del html
};