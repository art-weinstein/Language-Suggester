$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const sleepChoice = $("#sleep").val();
    const transportChoice = $("#transport").val();
    const careerChoice = $("#career").val();
    const musicChoice = $("#music").val();
    const gameChoice = $("#game").val();
  });
});