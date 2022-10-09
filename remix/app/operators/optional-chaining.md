---
meta:
  title: Optional chaining operator
  description: The optional chaining operator enables you to read the value of a property nested deep within ab object without having to do checks to see if each property if valid.
icon:
---

The optional chaining operator enables you to read the value of a
property nested deep within ab object without having to do checks to see
if each property if valid.

It's safe to use this operator. It's similar to the "." object property
access operator, however it will return undefined if the property being
read doesn't exist.

```javascript
const obj1 = {
  name: "Bob",
  hair: {
    colour: "brown",
  },
};

// obj2?.hair.colour is undefined because the method doesn't exist
// this is an alternative to doing complex checks to see if the property exists via for-in loops
const obj2 = {
  name: "Ted",
};
```
