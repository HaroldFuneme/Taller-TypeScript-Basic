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
var cursosTable = document.getElementById("cursos");
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
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "\n    <td>" + curso.nombre + "</td>\n    <td>" + curso.calificaciion + "</td>\n    <td>" + curso.horas + "</td>\n    <td>" + curso.anio + "</td>\n    ";
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
