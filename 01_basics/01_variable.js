const accountId = "144553";
let accountEmail = "yashera@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

console.log("accountId");

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accountCity, accountState]);
