$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const sleepChoice = $("#sleep").val();
    const transportChoice = $("#transport").val();
    const careerChoice = $("#career").val();
    const musicChoice = $("#music").val();
    const gameChoice = $("#game").val();
    if (sleepChoice === "Early Bird" && careerChoice === "Engineer") {
      $("#c").show();
      $("#html").hide();
      $("#python").hide();
      $("#savage").hide();
      //I was messing with order of operations, so for HTML to show, the user has to choose either walking, web desgin and rock, OR at least funk and nintendo switch. Choosing both options at the same time also works. 
    } else if (transportChoice === "Walking" && careerChoice === "Web Design" && musicChoice === "Rock" || musicChoice === "Funk" && gameChoice === "Nintendo Switch") {
      $("#html").show();
      $("#savage").hide();
      $("#c").hide();
      $("#python").hide();
    } else if (sleepChoice === "Night Owl" && transportChoice === "Motorcycle" && careerChoice === "Cyber Security" && musicChoice === "FUTURE FUNK" && gameChoice === "Gameboy Color" || careerChoice === "Cyber Security" && sleepChoice === "Early Bird") {
      $("#python").show();
      $("#savage").hide();
      $("#c").hide();
      $("#html").hide();
    } else {
      $("#savage").show();
      $("#c").hide();
      $("#html").hide();
      $("#python").hide();
    }
  });
});

$(document).ready(function(){
  $("body#c").addClass("grey-background");
});