$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const sleepChoice = $("#sleep").val();
    const transportChoice = $("#transport").val();
    const careerChoice = $("#career").val();
    const musicChoice = $("#music").val();
    const gameChoice = $("#game").val();
    if (sleepChoice === "Early Bird" && careerChoice === "Engineer" || transportChoice === "Car" && gameChoice === "PC" || musicChoice === "Metal" && careerChoice === "Librarian") {
      $("#cTheme").fadeIn().show();
      $("#c").fadeIn().show();
      $("#html").hide();
      $("#hTheme").hide();
      $("#python").hide();
      $("#pTheme").hide();
      $("#savage").hide();
      $("#sTheme").hide();
    } else if (transportChoice === "Walking" && careerChoice === "Web Design" && musicChoice === "Rock" || musicChoice === "Funk" && gameChoice === "Nintendo Switch" || sleepChoice === "Early Bird" && careerChoice === "Web Design" || musicChoice === "Rock" && gameChoice === "Xbox") {
      $("#html").fadeIn().show();
      $("#hTheme").fadeIn().show();
      $("#savage").hide();
      $("#sTheme").hide();
      $("#c").hide();
      $("#cTheme").hide();
      $("#python").hide();
      $("#pTheme").hide();
      $("cTheme").hide();
    } else if (sleepChoice === "Night Owl" && transportChoice === "Motorcycle" && careerChoice === "Cyber Security" && musicChoice === "FUTURE FUNK" && gameChoice === "Gameboy Color" || careerChoice === "Cyber Security" && sleepChoice === "Early Bird" && gameChoice === "PC" || sleepChoice === "Night Owl" && transportChoice === "Bike")  {
      $("#python").fadeIn().show();
      $("#pTheme").fadeIn().show();
      $("#savage").hide();
      $("#sTheme").hide();
      $("#c").hide();
      $("#cTheme").hide();
      $("#html").hide();
      $("#hTheme").hide();
    } else {
      $("#savage").fadeIn().show();
      $("#sTheme").fadeIn().show();
      $("#c").hide();
      $("#html").hide();
      $("#hTheme").hide();
      $("#python").hide();
      $("#pTheme").hide();
      $("#cTheme").hide();
    }
  });
});

