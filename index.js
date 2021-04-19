
let who = ['The dog','My grandma','His turtle','My bird']; 
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


function linea1(num1, num2, num3, num4){

    return num1[Math.floor(Math.random()*who.length)]+ " " + num2[Math.floor(Math.random()*action.length)]+ " " +num3[Math.floor(Math.random()*what.length)]+ " " +num4[Math.floor(Math.random()*when.length)];
}
console.log(linea1(who,action,what,when))
