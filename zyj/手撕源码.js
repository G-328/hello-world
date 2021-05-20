/*
/!*
Function.prototype.call = function(context, ...arg) {
  let self = this
  const key = Symbol('KEY')
  context[key] = this
  let result = context[key](...arg)
  delete context[key]
  return result
}

const instance_of = (example, classFunc) => {
  let classFuncPrototype = classFunc.prototype
  let examplePro = Object.getPrototypeOf(example)

  while (true) {
    if (classFuncPrototype === null) {
      return false
    }
    if (example === classFuncPrototype) {
      return true
    }
    examplePro = Object.getPrototypeOf(examplePro)
  }
}
instance_of([], Array)
*!/
let object = { name: 'zyj', age: 22 }
Object.prototype[Symbol.iterator] = function() {
  let self = this
  let index = 0
  let keys = Object.keys(self).concat(Object.getOwnPropertySymbols(self))
  return {
    next() {
      if (index > keys.length - 1) {
        return {
          value: undefined,
          done: true
        }
      }
      return {
        value: self[keys[index++]],
        done: false
      }
    }
  }
}
for(let key of object) {
  console.log(key)
}
*/

const http = require('http')
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readLine.question(`你叫什么名字`, name => {
  console.log(name)
  readLine.close()
})
const hostname = '127.0.0.1'

const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, Woeld')
})

console.log(process.argv, 'process')

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
