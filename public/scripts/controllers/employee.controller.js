myApp.controller('EmployeeController', ['$http', function($http){

  var self = this;
  self.newEmployee = {};
  var employeeList = {list: []};
  var newEmployeeData = self.newEmployee;

  getEmployees();

  function getEmployees(){
    $http({
      method: 'GET',
      url: '/employees'
    }).then(function(response) {
      console.log('response from server: ', response)
      employeeList.list = response.data;
      self.employeeArray = employeeList.list;
    });
  }

  self.addEmployee = function(){
    $http({
      method: 'POST',
      url: '/employees/new',
      data: newEmployeeData
    }).then(function(response){
      console.log(response);
      getEmployees();
    });
    self.newEmployee = null;
  }

  self.deleteEmployee = function(employeeId){
    $http({
      method: 'DELETE',
      url: '/employees/remove' + employeeId
    }).then(function(response) {
      getEmployees();
    });
  }

}]); // end of my app controller
