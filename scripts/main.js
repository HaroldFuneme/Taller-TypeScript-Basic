import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Practicas esenciales para el agilismo", 20, true, 2019),
    new Curso("Pruebas automatizadas", 80, true, 2029),
    new Curso("Diseño y Arquitectura", 60, true, 2010),
];
export var ap = new Aprendiz("Harold Hernando", "Funeme Molano", "avatar.png", 33, NivelEducativo.POSTGRADO, cursos);
console.log(ap);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombre + "</td></tr>\n    <tr><td>Apellidos: </td><td>" + aprendiz.apellido + "</td></tr>\n    <tr><td>Nivel Educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>\n    ";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "\n    <td><b>Cursos certificados</b></td>\n    <td>" + numeroCertificados + "</td>\n    ";
    estadisticasTable.appendChild(trElement);
}
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
