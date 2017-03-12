myApp.controller('EmployeeController', ['$http', function($http){
  console.log('employee controller was loaded');

  var self = this;
  var employeeList = {list: []}

getEmployees();

  function getEmployees(){
    console.log('add employee button clicked');
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
    console.log('add employee button clicked');
  }

  // self.deleteEmployee = function(){
  //   console.log('delete employee button clicked');
  // }
}]); // end of my app controller
