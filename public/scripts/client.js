var myApp = angular.module('EmployeeApp', []);

myApp.controller('EmployeeController', function(){
  console.log('employee controller was loaded');

  var self = this;

  self.newEmployee = {};

  self.addEmployee = function(){
    console.log('add employee button was clicked');
  }

  self.deleteEmployee = function(){
    console.log('delete employee button was clicked');
  }

}); // end of myApp controller
