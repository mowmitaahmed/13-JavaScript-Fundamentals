var teaLine = ['Kalam','Salam','Balam'];
console.log(teaLine);

teaLine.push('Jalam');
console.log(teaLine);

teaLine.pop();
console.log(teaLine);

teaLine.shift();
console.log(teaLine);

teaLine.unshift('Mow');
console.log(teaLine);

var part = teaLine.slice(2);
console.log(part);

teaLine.push('Mowmita');
console.log(teaLine);

var part = teaLine.slice(1, 3);
console.log(part);