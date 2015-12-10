angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $log) {

  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-usd', 'ion-social-bitcoin','ion-social-yen','ion-social-euro'];

  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectIcon = function (number) {
    $scope.selectedIcon = number;
  }

  // Initialize game state
  $scope.newGame = function() {
    // TODO: Set all data properties/structures to their beginning state
    var secretCode = [];

      for (var i = 0; i < 4; i++) {
        var randNum = Math.floor(Math.random() * 4)
        secretCode.push($scope.icons[randNum])
      };

        return secretCode;
      //randomize icons index
      //and store somewhere
      //set selected icon to 0
      //set store to 0

  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    // TODO: Show winModal IF turn has cracked the code. Put below line in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal. Save on $scope and show when there's a chicken dinner!
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});

