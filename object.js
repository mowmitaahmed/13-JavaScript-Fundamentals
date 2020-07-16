var student = {id : 121, phone: 1745, name: "Abir"};
var student2 = {id: 131, phone: 457, name: "mahi"};

var phoneNo = student.phone;

console.log(phoneNo);
console.log(student2);


var phoneNo = student2["phone"];
console.log(phoneNo);

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

console.log(phoneNo1);
console.log(phoneNo2);
console.log(phoneNo3);

student2.phone = 547854;
student2["phone"] = 666888;
student2[phonePropName] = 99991111;
student2.cinema = "Ogni22";
student2["cinema"] = "Smart girl";

var newPhone1 = student2.phone;
var newPhone2 = student2["phone"];
var newPhone3 = student2[phonePropName];
var newPhone4 = student2.cinema;
var newPhone5 = student2["cinema"];

console.log(newPhone1);
console.log(newPhone2);
console.log(newPhone3);
console.log(newPhone4);
console.log(newPhone5);