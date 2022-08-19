import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz("Harold Hernando", "Funeme Molano", "avatar.png", 33, NivelEducativo.POSTGRADO);
console.log(ap);
console.log(ap);
var aprendizTable = document.getElementById("aprendiz");
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombre + "</td></tr>\n    <tr><td>Apellidos: </td><td>" + aprendiz.apellido + "</td></tr>\n    <tr><td>Nivel Educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>\n    ";
    aprendizTable.appendChild(tbodyAprendiz);
}
mostrarDatosAprendiz(ap);
