---
meta:
  title: Boolean
  description: The Boolean object represents a truth value true or false.
---

## Boolean

The Boolean object represents a truth value: true or false.

Any object, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true:

```javascript
const x = new Boolean(false);
if (x) {
// this code is executed
}
```

If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.

```javascript
const myFalse = new Boolean(false);     // initial value of false
const g = Boolean(myFalse);             // initial value of true
const myString = new String('Hello');   // string object
const s = Boolean(myString);            // initial value of true
```
