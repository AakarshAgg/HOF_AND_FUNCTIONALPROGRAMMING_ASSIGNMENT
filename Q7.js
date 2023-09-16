async function multipleRequest(){
    let obj={}
    let result1=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    result1=await result1.json()
    let result2=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    result2=await result2.json()
    obj.todo=result1
    obj.post=result2
    console.log(obj)
}

multipleRequest()