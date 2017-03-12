myApp.controller('EmployeeController', function(){
  console.log('employee controller was loaded');

  var self = this;

  self.addEmployee = function(){
    console.log('add employee button clicked');
  }

  self.deleteEmployee = function(){
    console.log('delete employee button clicked');
  }

}); // end of myApp controller
