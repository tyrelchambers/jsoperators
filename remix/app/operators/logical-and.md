---
meta:
  title: Logical AND
  description: The logical AND operator evaluates all values from left to right where it wil return false at the first falsy value. Otherwise, the very last value in the chain will be returned.
---

The logical AND operator evaluates all values from left to right where
it wil return false at the first falsy value. Otherwise, the very last
value in the chain will be returned.

This operator will return the first falsy value it encounters.

```javascript
console.log(2 && 3); // 3
console.log(2 && 0); // 0
console.log(0 && 2); // 0
console.log(0 && 0); // 0
console.log(2 && "a"); // 'a'
console.log(0 && "a"); // 0
console.log("a" && 0); // 0
console.log("a" && "b"); // 'b'
console.log(1 && 2 && 0 && 8); // 0
console.log(true && true && false && true); // false
```
