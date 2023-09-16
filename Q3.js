function ageInDays(obj,callback){
  let fullname=obj.firstname.concat(" ",obj.lastname)
  let ageInDays=obj.age*365.24
  callback(fullname,ageInDays)
}

let person={
    firstname:"John",
    lastname:"cena",
    age:24
}

function logResult(name,age){
    console.log(`The person's full name is ${name},and their age in days is ${age}`)
}

ageInDays(person,logResult)