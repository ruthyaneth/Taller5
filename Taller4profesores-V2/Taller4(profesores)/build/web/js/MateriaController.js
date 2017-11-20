'use strict';

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = materias;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        
        $scope.listaProfesor = profesor;
        $scope.listaCarrera = carreras;

        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {};
        };

        $scope.guardar = function () {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index === -1) {
                $scope.datosFormulario.id=idMateria++;
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
        
        
        
        
        
        //listar
        $scope.listaHorario1 = materias;
        $scope.datosFormularioHorario1 = {};
        $scope.panelEditarHorario = false;

        $scope.nuevoHorario = function () {
            $scope.panelEditarHorario = true;
            $scope.datosFormularioHorario1 = {};
        };

        $scope.guardarHorario = function () {
            var index = $scope.listaHorario1.indexOf($scope.datosFormularioHorario1);
            if (index === -1) {
                $scope.datosFormularioHorario1.idH=idMateria++;
                $scope.listaHorario1.push($scope.datosFormularioHorario1);
            }
            $scope.panelEditarHorario = false;
        };
        
        $scope.cancelarHorario = function () {
            $scope.panelEditarHorario = false;
            $scope.datosFormularioHorario1 = {};
        };

        //editar
        $scope.editarHorario = function (data) {
            $scope.panelEditarHorario = true;
            $scope.datosFormularioHorario1 = data;
        };
        //eliminar
        $scope.eliminarHorario = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                var index = $scope.listaHorario1.indexOf($scope.datosFormularioHorario1);
                if (index > -1) {
                    $scope.listaHorario1.splice(index, 1);
                }
            }
        };
        
        
        
    }]);
