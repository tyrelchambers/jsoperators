---
meta:
  title: Rest parameters operator
  description: This operator packs multiple parameters into one array variable
---

This operator packs multiple parameters into one array variable

_not to get confused with_ [spread syntax](/operator/spread-syntax)

```javascript
function greet(spouseName, ...childrenNames){

console.log(\`\${spouseName} is my spouse\`);

//print only if non-empty array or second argument passed
if(childrenNames.length > 0)
console.log(\`Our children: \${childrenNames}\`);
}
const children = ['Al', 'Bill', 'Chloe'];
greet('Jane', children)
greet('Jane', 'Al', 'Bill', 'Chloe')
//will print twice:
// Jane is my spouse
// Our children: Al,Bill,Chloe
```
