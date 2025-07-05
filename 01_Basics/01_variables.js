const accountId = 1234567890;
let accountEmail = "bijendra@google.com";
var accountPassword = "456446";
accountCity = "Delhi";
accountEmail = "bijendra@outlook.com";
accountPassword = "1546";
accountCity = "Noida";

/*
Prefer not to use var, use let or const instead
because of issue in block scope and function scope.
*/
let accountState
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);
