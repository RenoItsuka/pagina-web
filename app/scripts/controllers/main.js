'use strict';
angular.module('angular1App')
  .controller('MainCtrl',[
  	'$scope',
  	function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var alumnos = [
      {nombre: 'Pedro', estado: 'reprobado'},
      {nombre: 'Luis', estado: 'aprobado'},
      {nombre: 'José', estado: 'encurso'},
      {nombre: 'Antonio', estado: 'reprobado'},
      {nombre: 'Manuel', estado: 'aprobado'},
      {nombre: 'Melisse', estado: 'reprobado'},
      {nombre: 'Mariana', estado: 'reprobado'},
      {nombre: 'Karla', estado: 'aprobado'},
      {nombre: 'Rafael', estado: 'encurso'},
      {nombre: 'Ernesto', estado: 'reprobado'},
      {nombre: 'Arturo', estado: 'aprobado'},
      {nombre: 'Jaime', estado: 'reprobado'},
      {nombre: 'Renato', estado: 'reprobado'},
      {nombre: 'Ramon', estado: 'encurso'},
      {nombre: 'Daniel', estado: 'encurso'},
      {nombre: 'Montserrat <3', estado: 'aprobado'},
      {nombre: 'Carmen', estado: 'aprobado'},
      {nombre: 'Maistro Longaniza', estado: 'encurso'}
    ];

    $scope.alumnos = alumnos;
    $scope.estatusSeleccionado = 'Todos los Maestros';




    $scope.estado = '';

    $scope.cambiarEstatus = function(nuevoEstatus) {
      $scope.estado = nuevoEstatus;
      $scope.alumnos = [];
      if(nuevoEstatus == 'todos') {
        $scope.alumnos = alumnos;
      } else {
        alumnos.forEach(function(alumno){
          if(alumno.estado === nuevoEstatus) {
            $scope.alumnos.push(alumno);
          }
        });
      }


      switch (nuevoEstatus) {
        case 'reprobado':
          $scope.estatusSeleccionado = "Maestros reprobadores";
          break;
        case 'encurso':
          $scope.estatusSeleccionado = "Maestros en curso";
          break;
        case 'aprobado':
          $scope.estatusSeleccionado = "Maestros buenos";
          break;
        case 'todos':
          $scope.estatusSeleccionado = "Todos los maestros";
          break;
        default:
      }
    }





  }]);
