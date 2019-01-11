$(document).ready(function(){


// initialize global variables

var gem1;
var gem2;
var gem3;
var gem4;
var random = Math.floor(Math.random()* 101 +19) //  random number between 19 -120

var wins = 0;
var losses = 0;
$(".wins").text(wins);
$(".losses").text("Losses: " + losses);
// display random number between 19 -120
$(".matchScore").text(random);
console.log(random);

// generate and hide new value for each crystal between 1 - 12
function crystalNum(){
    gem1 = Math.floor(Math.random() * 11 + 1);
    gem2 = Math.floor(Math.random() * 11 + 1);
    gem3 = Math.floor(Math.random() * 11 + 1);
    gem4 = Math.floor(Math.random() * 11 + 1);

}
// capture click for crystal
$("#gem1").on("click",function(){

});

$("#gem2").on("click",function(){

});

$("#gem3").on("click",function(){

});
$("#gem4").on("click",function(){

});
// update the player's score counter
// player wins if total score === random number from beginning of the game
// player loses if score goes above the random number
// restart game whenever the player wins or loses
// keep track of number of games player wins or loses

});