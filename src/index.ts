let id: number = 0

id = 4

const company: string = "chtslk"
let isPublished: boolean = true
let x: any = "Hello"
let users = {
  company: "Github",
}

const ids: number[] = [1, 2, 3, 4]
// ids.push("hello")
const arr: any[] = [1, 3, 4, false]
arr.push("hello", 234, "test")
console.log(arr)

console.log("Id: ", id)
console.log("users company", users.company)

// tuple
let person: [number, string, boolean] = [1, "Brad", false]

// tuple array
let employee: [number, string][]

employee = [
  [1, "Hasan"],
  [2, "Mert"],
  [1, "test"],
]

//! Union
let pId: string | number
pId = "22"
pId = 22
console.log(pId)
