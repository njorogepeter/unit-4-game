$(document).ready(function(){


// initialize global variables

var gem1;
var gem2;
var gem3;
var gem4;
var random = Math.floor(Math.random()* 101 +19) //  random number between 19 -120

var wins = 0;
var losses = 0;
var total = 0;
$(".userWins").text("Wins: " + wins);

$(".userLosses").text("Losses: " + losses);


// display random number between 19 -120
$(".matchScore").text(random);
console.log(random);

// generate and hide new value for each crystal between 1 - 12
var gem = [];
function crystalNum(){
    for( var i = 0; i < 4; i++){
        gem[i] = Math.floor(Math.random() * 11 + 1);
    }
}
crystalNum();

gem1 = gem[0];
gem2 = gem[1];
gem3 = gem[2];
gem4 = gem[3];

// capture click for each crystals
$("#gem1").on("click",function(){
    gemOnClick(gem[0]);
    console.log(gem1);
});

$("#gem2").on("click",function(){
    gemOnClick(gem[1]);
    console.log(gem2);
});

$("#gem3").on("click",function(){
    gemOnClick(gem[2]);
    console.log(gem3);
});

$("#gem4").on("click",function(){
    gemOnClick(gem[3]);
    console.log(gem4);
});

// update the player's score counter
function gemOnClick(gemValue){
    total = total + gemValue;
    $("#total").text(total);

// player wins if total score === random number from beginning of the game
    if(total === random){
        win();
        $(".userWins").text("Wins: " + wins);

    }
// player loses if score goes above the random number
    else if (total > random){
        loss();
        $(".userLosses").text("Losses: " + losses);

    }
}
// restart game whenever the player wins or loses
function restart(){
    random = Math.floor(Math.random()* 101 +19);
    $(".matchScore").text(random);
    crystalNum();
    total = 0;
    $("#total").text(total);
}
// keep track of number of games player wins or loses
function win(){
    wins++;
    // $("wins").text("Wins: " + wins);
    console.log("winning", wins);
    restart();
}
function loss(){
    losses++;
    // $("losses").text("Losses: " + losses);
    console.log("lossing",losses)
    restart();
}
});