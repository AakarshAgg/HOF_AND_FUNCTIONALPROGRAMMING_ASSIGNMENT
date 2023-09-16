function display(name){
   return new Promise(function exe(resolve){
        resolve(`Hello,${name}!`)
   })

}

display("Aakarsh").then((value)=>{
    console.log(value)
})
