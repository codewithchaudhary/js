const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

console.log(accountId)
// accountId = 2 // not allowed


accountEmail = "vc@gmail.com"
accountPassword = "212121"
accountCity = "Meerut"

/*
prefer not to use var
because of issues in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity])