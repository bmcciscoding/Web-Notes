# The Basics

命名

```javascript
var a = 10
let b = '20'
const COLOR_WHITE = '0xffffff'
```

类型

```javascript
// number
let intValue = 123
let doubleValue = 123.0
let max = Infinity // 无穷大
let min = -Infinity // 无穷小
let nan = 'not a number' / 2 // Nan

// bigint

// string
let str = 'Hello'  // 单引号
let str2 = "World" // 双引号
let str3 = `hello ${str}` // 字符串插值

// boolean 
let isTrue = 4 > 1
let isTure2 = false // 与之相对的是 true

// null 和 undefined
let student = null
let age = undefined

// object
let person = {}
// symbol

// 检查类型可以用 typeof
typeof age // undefined
typeof(age) // undefined
```

运算

```javascript
// 除了 + - * / %，还支持 **，幂运算
let a = 2 ** 3 // 8

// 比较分为相等 == 和严格 === 相等，严格相等不会转换类型
0 == false // true
0 === false // false
```

逻辑