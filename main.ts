
//Exercise 1------------------------------------------
type  Student = {
    name: string
    lastname: string
    age: number
    notes: number[]
}

let anton: Student = {
    name: "Anton",
    lastname: "Meier",
    age: 17,
    notes: [1, 4, 5, 1, 4, 9]

}
function getNotesByStudent(student: Student) {
    console.log(student.name + " " + student.lastname + "(" + student.age + ")")
    console.log("=".repeat(30))
    console.log("Noten: " + student.notes.join())
}

getNotesByStudent(anton)
//Exercise 2----------------------------------------------------------

type  AmericanStudent = {
    name: string
    lastname: string
    age: number
    notes: any[]
}

let anton2: AmericanStudent = {
    name: "Anton",
    lastname: "Meier",
    age: 17,
    notes: ["A", 2, "F", 3, 1, "B", 2, 5]

}
function getAmericanNotesByStudent(student: AmericanStudent) {
    console.log(student.name + " " + student.lastname + "(" + student.age + ")")
    console.log("=".repeat(30))
    console.log(" Noten:\n" + student.notes.join())
}
getAmericanNotesByStudent(anton2)

//Exercise 3----------------------------------------------------------------

type Note = {
    note?: string | number
}
type  NewStudent = {
    name: string
    lastname: string
    age: number
    notes: Note[]
}

let anton3: NewStudent = {
    name: "Anton",
    lastname: "Meier",
    age: 17,
    notes: [{}, {note:"A"}, {note:2},{}, {note:"F"}, {note:3}, {note:1}, {note:"B"}, {note:2}, {note:5}]

}

function getNewNotesByStudent(student: NewStudent) {
    console.log(student.name + " " + student.lastname + "(" + student.age + ")")
    console.log("=".repeat(30))
    console.log(" Noten:")
    console.log(student.notes.map(element => element.note?element.note:"*").join())
}

getNewNotesByStudent(anton3)

//Exercise 4----------------------------------------------------

let students:NewStudent[] = new Array(3)

let student1: NewStudent = {
    name: "Anton",
    lastname: "Meier",
    age: 17,
    notes: [{}, {note:1}, {note:4}, {note:3}, {note:1}, {note:"A"}, {}, {note:1}, {note:2}]

}
let student2: NewStudent = {
    name: "Berta",
    lastname: "Müller",
    age: 17,
    notes: [{}, {note:"A"}, {}, {note:"1"}]

}
let student3: NewStudent = {
    name: "Cäsar",
    lastname: "Schmidt",
    age: 17,
    notes: [{note:"A"}, {note:1},{}, {note:3}, {note:2}, {note:4}, {note:5}]

}
students.push(student1)
students.push(student2)
students.push(student3)