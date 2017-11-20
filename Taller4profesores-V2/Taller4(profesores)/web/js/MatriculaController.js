'use strict';

var contar = 0;

module.controller('MatriculaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = Matricula;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.listaEstudiante = estudiantes;
        $scope.listaCarreras = 0;
        $scope.listaMateria = materias;
        $scope.listaCar = materias;
        
        

        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {};
        };

        $scope.guardar = function () {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index === -1) {
                $scope.datosFormulario.id=idMatricula++;
                $scope.lista.push($scope.datosFormulario);
            }
            $scope.panelEditar = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormulario = data;
        };
        //eliminar
        $scope.eliminar = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                var index = $scope.lista.indexOf($scope.datosFormulario);
                if (index > -1) {
                    $scope.lista.splice(index, 1);
                }
            }
        };
        
        $scope.mostrarMateria = function (data) {
            console.log($scope.datosFormulario.estudiantes.nombre);
            $scope.listaCarreras = [];
            for (var i = 0; i < $scope.listaCar.length; i++) {
               console.log($scope.datosFormulario.estudiantes.carreras.nombre === $scope.listaCar[i].carreras.nombre);
               
                if ($scope.datosFormulario.estudiantes.carreras.nombre === $scope.listaCar[i].carreras.nombre) {
                console.log($scope.listaCar[i].nombre + '  confirmando');
                   $scope.listaCarreras.push($scope.listaCar[i]);
                console.log($scope.listaCar[i].nombre + '   guardada');
                }
                
            }
            
        };
        
    }]);

