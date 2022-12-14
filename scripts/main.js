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
var btnFilter = document.getElementById("boton-filtro");
//let btnFilterFormaLamda: HTMLElement = document.getElementById("boton-filtro-Skip!!")!;
var textoBusqueda = document.getElementById("texto-busqueda");
// btnFilterFormaLamda.onclick = () =>{
//     let text: string =  textoBusqueda.value;
//     text =  (text == null)? "": text;
//     cursosTable.getElementsByTagName("tbody")[0].remove();
//     let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text)})
//     mostrarCursosAprendiz(cursosFiltrados);
// };
btnFilter.onclick = filtrarPorNombre;
function filtrarPorNombre() {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
}
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
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    var index = 0;
    var estado = cursos.map(function (c) { return (c.horas > 60) ? 'green' : 'red'; });
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "\n    <td>" + curso.nombre + "</td>\n    <td>" + curso.calificaciion + "</td>\n    <td style= \"color: " + estado[index] + "\">" + curso.horas + "</td>\n    <td>" + curso.anio + "</td>\n    ";
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
