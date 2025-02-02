const accountId = 22311152
let accountEmail = "aditi@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "22310870"
accountCity = "Mumbai"

/* prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])