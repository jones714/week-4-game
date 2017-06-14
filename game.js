window.onload = function(){

  var targetNumber;
  var numberOptions;
  var counter;
  function reset(){
    console.log("Hello");
     targetNumber = [Math.floor(Math.random() * (120-19) ) + 19];
     numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];
     
     $("#number-to-guess").text(targetNumber);
   counter = 0;
   $("#totalscore").html(counter);
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // We begin by expanding our array to include four options.
  //We used this to generate the image values between 1 and 12
   numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];
  //We used this to check the values
      // Next we create a for loop to create crystals for every numberOption.


}
  var wins = 0;
  var losses = 0;
  //var targetNumber = 53;

  //game = function(){
  
   targetNumber = [Math.floor(Math.random() * (120-19) ) + 19];
  
  //console.log("Target Number is: " + targetNumber);
  for (var i =0; i < 1000; i++){
    targetNumber = [Math.floor(Math.random() * (120-19) ) + 19];
    //console.log("Target Number is: " + targetNumber);
    if (targetNumber > 120) {
      console.log("It goes over");
    }else if (targetNumber < 19) {
      console.log("it goes under");
    }
  }
  $("#number-to-guess").text(targetNumber);
   counter = 0;
   $("#totalscore").html(counter);
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // We begin by expanding our array to include four options.
  //We used this to generate the image values between 1 and 12
   numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];
  //We used this to check the values
  for (var i=0; i<4; i++){
    console.log(numberOptions[i]);
  }
  
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "css/images/pic" + i + ".jpg");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);

    console.log(imageCrystal);
  }
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#totalscore").html(counter);
    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      alert("You win!");
      rest();
    
    }
    else if (counter >= targetNumber) {
      losses++;
      $("#losses").text(losses);
      alert("You lose!!");
     
      console.log(counter);
      console.log(targetNumber);
      reset();
    }
  });

  
}
