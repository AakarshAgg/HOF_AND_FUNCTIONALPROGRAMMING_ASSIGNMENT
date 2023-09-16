function manipulateString(string,callback){
     let result=string.toUpperCase()
     callback(result)
}

function logString(val){
  console.log("The manipulated string is:",val)
}

manipulateString("hello, world!", logString)