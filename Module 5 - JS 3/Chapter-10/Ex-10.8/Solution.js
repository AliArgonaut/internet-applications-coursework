//task a 
let f = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"]
console.log("TASK A: f = [" + f + "]")
let seventh = f[6]
aTask = document.getElementById("a_solution")
aTask.innerText = seventh

//task b 
let g = new Array(8).fill(8) 
console.log("TASK B: g = [" + g + "]")
bTask = document.getElementById("b_solution")
bTask.innerText = g

//task c 
let c = new Array(100).fill(1)
console.log("TASK C: [" + c + "]")
let sum = c.reduce((a, b) => a + b, 0)
cTask = document.getElementById("c_solution")
cTask.innerText = sum

//task d
let a = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]
let b = new Array(34).fill(0)

console.log("TASK D: a = [" + a + "]")
console.log("TASK D: b = [" + b + "]")

b = a.concat(b);

console.log("TASK D: NEW B = [" + b + "]")
dTask = document.getElementById("d_solution")
dTask.innerText=b

//task e
let w = Array.from( {length: 99 }, () => (Math.random() * 100).toFixed(2)) 
console.log("TASK E: w = [" + w + "]")

let min = Math.min(...w)
let max = Math.max(...w)

eTask = document.getElementById("e_solution")
eTask.innerText = ("highest: " + max + "\n" + "lowest: " + min)
