let list=[
    {
        title:"abc",
        author:"xyz",
        year:1990
    },
    {
        title:"fgh",
        author:"pqr",
        year:1995
    },
    {
        title:"efg",
        author:"rst",
        year:2000
    },

]

function display(arr){
arr.sort()
console.log(`The title of the books are ${arr}`)
}

function books(list,callback){
let newarr=list.map((val)=>{
    return val.title
})
callback(newarr)
}

books(list,display)