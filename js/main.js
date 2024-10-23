console.log(formacion);
console.log(formacion_complementaria);

const aboutMe = document.querySelector(".sobre-mi");
const skills = document.querySelector(".habilidades");
const workExperience = document.querySelector(".experiencia");
const formation = document.querySelector(".formacion");

//-------------------------------------------------

/* CREO UNA FUNCIÓN PARA LOS DATOS DE LA FORMACIÓN */
crear_formacionComplementario(formacion_complementaria);
crear_formacion(formacion);

function crear_formacionComplementario(data) {
  const divFormacion = document.createElement("div");
  divFormacion.classList.add("formacion", "gap-3", "border", "border-1");
  data.forEach((elemento) => {
    divFormacion.appendChild(cardFormationComplementaria(elemento));
  });
  formation.appendChild(divFormacion);
}

/* CREAR EL CARD FORMACION COMPLEMENTARIA */
function cardFormationComplementaria(data) {
  const card = document.createElement("div");
  card.classList.add("card-body", "card", "bg-light", "shadow-sm");
  card.innerHTML = `
      <h5 class="card-title">${data.nombre_formacion}</h5>
      <p class="card-text">
        <strong>Centro de formación:</strong> ${data.centro_formacion}
      </p>
       <p class="card-text">
        <strong>Código:</strong> ${data.cod_formacion}
      </p>
      <p class="card-text">
        <strong>Fecha de inicio:</strong> ${data.fecha_inicio}
      </p>
      <p class="card-text">
        <strong>Fecha de finalización:</strong> ${data.fecha_fin}
      </p>
      <p class="card-text">
        <strong>Ciudad:</strong> ${data.ciudad}
      </p>
      <p class="card-text">
        <strong>Modalidad:</strong> ${data.modalidad}
      </p>
      <p class="card-text">
        <strong>Tipo de formación:</strong> ${data.tipo_formacion}
      </p>
`;
  return card;
}

/* CREAR EL CARD FORMACION */
function crear_formacion(data) {
  const titleFormacion = document.createElement("h2");
  titleFormacion.innerHTML = "Formación ";
  const divFormacion = document.createElement("div");
  divFormacion.classList.add("card-body", "card", "bg-light", "shadow-sm");
  data.forEach((elemento) => {
    divFormacion.innerHTML += `
      <h5 class="card-title">${elemento.nombre_formacion}</h5>
      <p class="card-text">
        <strong>Centro de formación:</strong> ${elemento.centro_formacion}
      </p>
      <p class="card-text">
        <strong>Fecha de inicio:</strong> ${elemento.fecha_inicio}
      </p>
      <p class="card-text">
        <strong>Fecha de finalización:</strong> ${elemento.fecha_fin}
      </p>
      <p class="card-text">
        <strong>Ciudad:</strong> ${elemento.ciudad}
      </p>
      <p class="card-text">
        <strong>Modalidad:</strong> ${elemento.modalidad}
      </p>
      <p class="card-text">
        <strong>Tipo de formación:</strong> ${elemento.tipo_formacion}
      </p>
`;
  });
  formation.appendChild(titleFormacion);
  formation.appendChild(divFormacion);
}

function cardFormation(data) {
  const card = document.createElement("div");
  return card;
}

/**
 * HABILIDADES
 *   */

crear_habilidades(habilidades);
function crear_habilidades(data) {
  const divHabilidades = document.createElement("p");
  divHabilidades.classList.add("habilidades");
  data.forEach((elemento) => {
    divHabilidades.innerHTML += `<strong class="">${elemento}</strong> <br>`;
  });
  skills.appendChild(divHabilidades);
}
