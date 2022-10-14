---
meta:
  title: Arguments object
  description: arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
---

The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.

```javascript
function func1(a, b, c) {
  console.log(arguments[0]); // expected output: 1

  console.log(arguments[1]); // expected output: 2

  console.log(arguments[2]); // expected output: 3
}

func1(1, 2, 3);
```
