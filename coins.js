/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var dollar = 100
var quarter = 25
var dime = 10
var nickel = 5
var penny = 1


function coinCounter (input) {
 // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters =Math.floor(input / quarter);
  input = Math.floor(input - coinPurse.quarters * quarter);
  coinPurse.dimes = Math.floor(input / dime);
  input = Math.floor(input -coinPurse.dimes * dime);
  coinPurse.nickels = Math.floor(input / nickel);
  input = Math.floor(input - coinPurse.nickels * nickel);
  coinPurse.pennys = Math.floor(input / penny);
  input = Math.floor(input - coinPurse.pennys * penny);

  return coinPurse;
}

var coins = coinCounter(97)
console.log(coins);