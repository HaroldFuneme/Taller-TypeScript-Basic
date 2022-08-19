import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz("Harold Hernando", "Funeme Molano", "avatar.png", 33, NivelEducativo.POSTGRADO);

console.log(ap);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;


function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres: </td><td>${aprendiz.nombre}</td></tr>
    <tr><td>Apellidos: </td><td>${aprendiz.apellido}</td></tr>
    <tr><td>Nivel Educativo: </td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${aprendiz.edad}</td></tr>
    `
    aprendizTable.appendChild(tbodyAprendiz);

}

mostrarDatosAprendiz(ap);