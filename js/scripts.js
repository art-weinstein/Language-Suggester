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
    } else if (sleepChoice === "Early Bird" || sleepChoice === "Night Owl" && transportChoice === "Motorcycle" && careerChoice === "Cyber Security" && musicChoice === "FUTURE FUNK" && gameChoice === "Gameboy Color") {
      $("#python").show();
      $("#savage").hide();
      $("#c").hide();
      $("#html").hide();
    }
    
    else{
      $("#savage").show();
      $("#c").hide();
      $("#html").hide();
      $("#python").hide();
    }
  });
});