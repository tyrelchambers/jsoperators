---
meta:
  title: Addition operator
  description: This addition operator servers two purposes - one for mathematical equations and one for concatinating strings.
---

## Numbers

This addition operator servers two purposes: one for mathematical
equations and one for concatinating strings.

Another weird example of addition happens when you add a **boolean** to a **number**.

```javascript
console.log(1 + true); // 2
```

This happens because in computer-speak, **true** represents
a 1 and **_false_** represents a 0. Remember the video game
consoles of the old days (Playstation 2) specifically or even modern
computer power supplies, there is a "1" and a "0" on the power switch to
represent on and off.

In our example, **true** is actually a "1". Just to further
explain this, look at this example showing how **false** is
used.

```javascript
console.log(1 + false); // 1
```

## Strings

If a number and a string are used together, they actually behave a
little differently.

```javascript
console.log(1 + "1"); // 11
```

It literally adds the number to the string.
