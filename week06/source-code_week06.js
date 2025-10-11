// 1. 
function filterAndTransform(arr, filterFn, transformFn) {
  return arr.filter(filterFn).map(transformFn)
}

const nums = [1, 2, 3, 4, 5, 6]
const isEven = n => n % 2 === 0
const double = n => n * 2

console.log(filterAndTransform(nums, isEven, double)) // [4, 8, 12]

// 2.
const students = [
  { name: 'A', score: 45 },
  { name: 'B', score: 75 },
  { name: 'C', score: 90 }
]

const updatedStudents = students.map(student => ({
  ...student,           
  score: student.score + 5 
}))

console.log('Original:', students) // Original: [
//   { name: 'A', score: 45 },
//   { name: 'B', score: 75 },
//   { name: 'C', score: 90 }
// ]

console.log('Updated:', updatedStudents) // Updated: [
//   { name: 'A', score: 50 },
//   { name: 'B', score: 80 },
//   { name: 'C', score: 95 }
// ]

// 3.
function createFilter(threshold) {
    
    return function(arr) {
    
    return arr.filter(num => num >= threshold)
  }
}

const scores = [40, 55, 60, 75, 80, 30]
const filterPass = createFilter(60)

console.log(filterPass(scores)) // [60, 75, 80]
console.log(scores) // [40, 55, 60, 75, 80, 30] 

// 4.
const square = x => x * x
const half = x => x / 2
const addTen = x => x + 10

function composeThree(f1, f2, f3) {
  return function(x) {
    return f3(f2(f1(x)))  
  }
}

const newFunc = composeThree(square, half, addTen)
console.log(newFunc(4)) // 18

// 5.
function createCounter(start) {
  let count = start
  return {
    inc: () => ++count,
    dec: () => --count,
    reset: () => { count = start; return count }
  }
}

const counter = createCounter(10)
console.log(counter.inc())   // 11
console.log(counter.inc())   // 12
console.log(counter.dec())   // 11
counter.reset()
console.log(counter.inc())   // 11
