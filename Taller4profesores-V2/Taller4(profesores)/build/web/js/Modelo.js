var idFacultad = 3;
var facultades = [
    {"id": 1, "nombre": "Ingenieria"},
    {"id": 2, "nombre": "Licenciatura"},
    {"id": 3, "nombre": "Salud"}
];

var idProfesor = 2;
var profesor = [
    {"id": 1, "nombre": "Yohan", "apellido": "Tarazona", "documento": "1234560128"},
    {"id": 2, "nombre": "Sebastian", "apellido": "Guarin", "documento": "0987656492"},
    {"id": 3, "nombre": "Runt", "apellido": "Mora", "documento": "2481503780"}
];

var idCarrera = 1;
var carreras = [
    {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}},
    {"id": 2, "nombre": "Idiomas Modernos", facultades: {"id": 2, "nombre": "Licenciatura"}},
    {"id": 3, "nombre": "Enfermeria", facultades: {"id": 3, "nombre": "Salud"}}
];

var idMunicipio = 4;
var municipios = [
    {"id": 1, "nombre": "Tunja"},
    {"id": 2, "nombre": "Duitama"},
    {"id": 3, "nombre": "Sogamoso"}
];


var idMateria = 5;
var materias = [
    {"id": 1, "nombre": "Programacion", "creditos": "10", horarios: {"id": 1, "nombreHorario": "horario1", "l": "10-12pm", "m": "-", "x": "-", "j": "7-9am", "v": "-"}, profesor: {"id": 1, "nombre": "Yohan", "apellido": "Tarazona", "documento": "1234560128"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 2, "nombre": "Bases de Datos", "creditos": "10", horarios: {"id": 2, "nombreHorario": "horario2", "l": "-", "m": "8-10am", "x": "2-4pm", "j": "-", "v": "4-5pm"}, profesor: {"id": 2, "nombre": "Sebastian", "apellido": "Guarin", "documento": "0987656492"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 3, "nombre": "Redes Datos", "creditos": "10", horarios: {"id": 3, "nombreHorario": "horario3", "l": "7-9am", "m": "8-10am", "x": "8-10am", "j": "-", "v": "-"}, profesor: {"id": 3, "nombre": "Runt", "apellido": "Mora", "documento": "2481503780"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 2, "nombre": "Fisica", "creditos": "10", horarios: {"id": 3, "nombreHorario": "horario3", "l": "7-9am", "m": "8-10am", "x": "8-10am", "j": "-", "v": "-"}, profesor: {"id": 2, "nombre": "Sebastian", "apellido": "Guarin", "documento": "0987656492"}, carreras: {"id": 2, "nombre": "Idiomas Modernos", facultades: {"id": 2, "nombre": "Licenciatura"}}}

];

var idEstudiante = 6;
var estudiantes = [
    {"id": 1, "nombre": "Pedro", "apellido": "Pastar", "codigo": "12345", "documento": "11111", "fechaNacimiento": '19/02/1995', municipios: {"id": 1, "nombre": "Tunja"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 2, "nombre": "Yanet", "apellido": "Beltran", "codigo": "24689", "documento": "22222", "fechaNacimiento": '19/02/1995', municipios: {"id": 2, "nombre": "Duitama"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 3, "nombre": "Santiago", "apellido": "Gusman", "codigo": "67891", "documento": "765432", "fechaNacimiento": '19/02/1995', municipios: {"id": 1, "nombre": "Tunja"}, carreras: {"id": 1, "nombre": "Ingenieria de sistemas", facultades: {"id": 1, "nombre": "Ingenieria"}}},
    {"id": 4, "nombre": "Jessica", "apellido": "Alcantara", "codigo": "6543", "documento": "098765", "fechaNacimiento": '19/02/1995', municipios: {"id": 3, "nombre": "Sogamoso"}, carreras: {"id": 2, "nombre": "Idiomas Modernos", facultades: {"id": 2, "nombre": "Licenciatura"}}}
];

var idMatricula = 8;
var Matricula = [
    
];

