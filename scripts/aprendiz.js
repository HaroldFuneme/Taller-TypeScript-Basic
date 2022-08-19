export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLER"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universitario";
    NivelEducativo["POSTGRADO"] = "Postgradpo";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombre, apellido, avatar, edad, nivelEducativo, cursos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursos = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.calificaciion) {
                totalCursos++;
            }
        }
        return totalCursos;
    };
    return Aprendiz;
}());
export { Aprendiz };
