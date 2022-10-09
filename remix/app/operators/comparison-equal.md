---
meta:
  title: Comparison equal
  description: The comparison operator evaluates the left-hand value, to the left. This operation returns a boolean value and will not try to coerce the left-hand type to match the right-hand type.
---

The comparison operator evaluates the left-hand value, to the left. This
operation returns a boolean value and will not try to coerce the
left-hand type to match the right-hand type.

This means that if I have an integer, 2, and I want to compare that to a
string "2", they will result in a **true** boolean value
because it's comparing the literal value and not the type of the value
as well.

```javascript
2 == "2"; // true
```

## Comparing strings

Like numbers, you can also compare strings where using the comparison
operator will check that each string is the same.

```javascript
"2" == "2"; // true
```
