function Double(arr1, callback) {
  let newarr= arr1.map(val => {
       return callback(val)
    })
    return newarr
}

let arr = [-1, -2, 1, 2, 3, 4]

function two(x) {
    return x * 2
}

let result=Double(arr, two)
console.log(result)

