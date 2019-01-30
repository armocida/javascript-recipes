/** 
* In some situations, you might want to leverage the "falling-through" behavior of switch
* statements to your advantage.
*/

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

/**
* prints: You’ll receive on copy of the NSFW (Not Safe for Work) Exploding Kittens card
* game and one copy of the Exploding Kittens catd game.
*/