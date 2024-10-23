console.log(formacion);
console.log(formacion_complementaria);

const aboutMe = document.querySelector(".sobre-mi");
const skills = document.querySelector(".habilidades");
const workExperience = document.querySelector(".experiencia");
const formation = document.querySelector(".formacion");

//-------------------------------------------------

/* CREO UNA FUNCIÓN PARA LOS DATOS DE LA FORMACIÓN */
crear_formacion(formacion);
crear_formacionComplementario(formacion_complementaria);

/* CREAR EL CARD FORMACION */
function crear_formacion(data) {
  const titleFormacion = document.createElement("h2");
  titleFormacion.innerHTML = "Formación";
  const divFormacion = document.createElement("ul");
  divFormacion.classList.add("bg-light", "shadow-sm");
  data.forEach((elemento) => {
    divFormacion.innerHTML += `
     <li>
      <h5 class="card-title"><strong>${elemento.nombre_formacion}</strong></h5>
      <strong>Centro de formación:</strong> ${elemento.centro_formacion}<br/>
      <strong>Fecha de inicio:</strong> ${elemento.fecha_inicio}<br/>
      <strong>Fecha de finalización:</strong> ${elemento.fecha_fin}<br/>
      <strong>Ciudad:</strong> ${elemento.ciudad}<br/>
      <strong>Modalidad:</strong> ${elemento.modalidad}<br/>
      <strong>Tipo de formación:</strong> ${elemento.tipo_formacion}<br/>
      <br/><br/>
     </li> 
`;
  });
  formation.appendChild(titleFormacion);
  formation.appendChild(divFormacion);
}

/** FORMACION COMPLEMENTARIA **/

function crear_formacionComplementario(data) {
  const titleFormacion = document.createElement("h2");
  titleFormacion.innerHTML = "Formación complementaria";
  const divFormacion = document.createElement("ul");
  divFormacion.classList.add("formacion", "bg-light", "shadow-sm");
  data.forEach((data) => {
    divFormacion.innerHTML += `
    <li>
    <h5 class="card-title"><strong>${data.nombre_formacion}</strong></h5>
    <strong>Centro de formación:</strong> ${data.centro_formacion}      <br/>
    <strong>Código:</strong> ${data.cod_formacion}<br/>
    <strong>Fecha de inicio:</strong> ${data.fecha_inicio}<br/>
    <strong>Fecha de finalización:</strong> ${data.fecha_fin}<br/>
    <strong>Ciudad:</strong> ${data.ciudad} <br/>
    <strong>Modalidad:</strong> ${data.modalidad} <br/>      
    <strong>Tipo de formación:</strong> ${data.tipo_formacion}
    <br/><br/>    
    </li>
`;
  });
  formation.appendChild(titleFormacion);
  formation.appendChild(divFormacion);
}

function cardFormationComplementaria(data) {
  /* CREAR EL CARD FORMACION COMPLEMENTARIA */
  const card = document.createElement("div");
  card.classList.add("bg-light", "shadow-sm");
  card.innerHTML = `
      <h5 class="card-title">${data.nombre_formacion}</h5>
      <strong>Centro de formación:</strong> ${data.centro_formacion}      <br/>
      <strong>Código:</strong> ${data.cod_formacion}<br/>
      <strong>Fecha de inicio:</strong> ${data.fecha_inicio}<br/>
      <strong>Fecha de finalización:</strong> ${data.fecha_fin}<br/>
      <strong>Ciudad:</strong> ${data.ciudad} <br/>
      <strong>Modalidad:</strong> ${data.modalidad} <br/>      
      <strong>Tipo de formación:</strong> ${data.tipo_formacion}
      <br/><br/>    
`;
  return card;
}

/**
 * HABILIDADES
 *   */

crear_habilidades(habilidades);

function crear_habilidades(data) {
  console.log(data);
  const mitad = data.length / 2;
  console.log(mitad);
  const divHabilidades = document.createElement("div");
  divHabilidades.classList.add("orderHabilidades");

  const ulLeft = document.createElement("ul");
  const ulRight = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    if (i < mitad) {
      ulLeft.innerHTML += `<li><strong class="">${data[i]}</strong></li>`;
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (i > mitad) {
      ulRight.innerHTML += `<li><strong class="">${data[i]}</strong></li>`;
    }
  }
  divHabilidades.appendChild(ulLeft);
  divHabilidades.appendChild(ulRight);
  skills.appendChild(divHabilidades);
}
