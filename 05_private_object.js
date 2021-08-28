// using Symbol class built-in JS ensures that values are unique
const username = Symbol("username")
const password = Symbol("password")

const user = {
    // adding [ ] around username and passwords makes these properties unaccessible and private
    [username]: "yuanyexi",
    [password]: "password",
    age: 30
}

console.log(username)