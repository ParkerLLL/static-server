/**
 * Created by parker on 14/05/2023.
 */
 
const fs = require('fs')

const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
console.log(usersArray)

const user3= {id:3,name:'jams', password:'yyy'}
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)