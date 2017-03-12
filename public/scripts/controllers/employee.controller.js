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

      var total = 0;
      for (var i = 0; i < self.employeeArray.length; i++) {
        total += Number(self.employeeArray[i].salary);
      }

      total = total / 12;
      self.employeeSalaryTotal = total;
    });
  } // end of getEmployees function

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
