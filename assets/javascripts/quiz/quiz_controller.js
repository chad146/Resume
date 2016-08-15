(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    quizController
  ];

  angular.module('ni.Quiz')
    .controller('quizController', definitions);

  function quizController($scope) {

    $scope.choice = []; 
    $scope.quizDone = false;
    $scope.quiz = [
      {
        "question" : "What is the capital of Pennsylvania?",
        "choices" : [
          "Wellsboro",
          "Philadelphia",
          "Harrisburg",
          "Pittsburgh"
        ],
        "answer" : "Harrisburg"
      },
      {
        "question" : "What is my wife's middle name?",
        "choices" : [
          "Marie",
          "Shelly",
          "Caitlyn",
          "Karissa"
        ],
        "answer" : "Marie"
      },
      {
        "question" : "What is the most valuable Magic the Gathering card?",
        "choices" : [
          "Shivan Dragon",
          "Royal Assassin",
          "Black Lotus",
          "Crimson Hellkite"
        ],
        "answer" : "Black Lotus"
      },
      {
        "question" : "What military school did I finish first?",
        "choices" : [
          "Airborne School",
          "Sniper School",
          "Ranger School",
          "Warrior Leader Course"
        ],
        "answer" : "Airborne School"
      }
    ];


      for (var i = 0; i < $scope.quiz.length; i++) {
        $scope.choice[i] = null;
      }


    $scope.currentQuestion = 0;


  }

})(angular);