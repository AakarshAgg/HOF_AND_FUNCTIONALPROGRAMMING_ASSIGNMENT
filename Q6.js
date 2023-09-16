async function getDetails(){
  let result=await fetch("https://jsonplaceholder.typicode.com/todos/1")
  result=await result.json()
  console.log(result)
}

getDetails()