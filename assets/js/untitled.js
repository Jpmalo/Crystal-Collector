
$(document).ready(function() {

  var score = 0;
  var wins = 0;
  var losses = 0;

  // Generates a random number between 19 and 120 and prints it to the screen
  var randomNum = Math.floor(Math.random() * 102) + 19;

  $('#random-number').html(randomNum);

  // Individual crystal values 
  var redValue = Math.floor(Math.random() * 12) + 1;
  var greenValue = Math.floor(Math.random() * 12) + 1;
  var yellowValue = Math.floor(Math.random() * 12) + 1;
  var blueValue = Math.floor(Math.random() * 12) + 1; 

  // Adds crystal values to score
  $('#red-crystal').on('click', function() {
    score += redValue;
    $('.score-number').html(score);
    checkScore();
  })

  $('#green-crystal').on('click', function() {
    score += greenValue;
    $('.score-number').html(score);
    checkScore();
  })

  $('#yellow-crystal').on('click', function() {
    score += yellowValue;
    $('.score-number').html(score);
    checkScore();
  })

  $('#blue-crystal').on('click', function() {
    score += blueValue;
    $('.score-number').html(score);
    checkScore();
  })

  
  function checkScore() {
    if (score === randomNum) {
      alert("You win! :)");
      wins++;
      $('#win-points').html(wins);
      resetGame();
    }
    if (score > randomNum) {
      alert("You lose! :(");
      losses++;
      $('#loss-points').html(losses);
      resetGame();
    }
  }

  function resetGame() {
    score = 0;
    $('.score-number').html(score);
    var randomNum = Math.floor(Math.random() * 102) + 19;
    $('#random-number').html(randomNum);
    var redValue = Math.floor(Math.random() * 12) + 1;
    var greenValue = Math.floor(Math.random() * 12) + 1;
    var yellowValue = Math.floor(Math.random() * 12) + 1;
    var blueValue = Math.floor(Math.random() * 12) + 1;
  }



  console.log(score);
  console.log(randomNum);

  
  

})



