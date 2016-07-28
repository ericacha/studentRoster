//in angular, we use controllers to handle the logic of the app

studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  //list student
  $scope.students = [];
  //add student and added into the students array
  $scope.addStudent = function() {
      $scope.students.push ({ name:$scope.studentName});
      $scope.studentName = null;
  };
  //delete student
  $scope.deleteStudent = function(student) {
     var index = $scope.students.indexOf(student);
     $scope.students.splice(index,1);
  }
});
