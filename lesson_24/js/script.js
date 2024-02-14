"use strict"

// let check = 5 != 3
// console.log(check);

let res = 0 || !23;
console.log(res);
console.log(Boolean(res));




let total = 3 && "5";
console.log(total);
console.log(Boolean(total));


let varOne = 30
let varTwo = 20
if (varOne > varTwo){
	console.log(`${varOne} is more than ${varTwo}`)
	
}
else if (varOne === varTwo){
	console.log("varOne is equal to varTwo")
}
else{
	console.log("Finally")
}
	
let contraversery = !'Pavlo';
console.log(typeof contraversery);
console.log(contraversery);

let and = 3 && !123;
console.log(and);

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}



// ===================================================================
let numOne ="1"
let numTwo = 3
let numThree = 3
let numFour = 8

if (numTwo === 2 || numOne > 3 && numThree < 4 || numFour > 6) {
	console.log("wtf");
}

// ====================================================================

// let mode = "Whats up everyone"
// console.log(typeof mode)
// console.log(mode.length)
// for( let i = 0; i < mode.length; ++i){
// 	console.log(mode[i])
// }


let array = [true, 5, 'Dima']
// console.log(typeof array)
// console.log(array[2])
// console.log(array)
// for(let i = 0; i < array.length; ++i){
// 	console.log(array[i])
// }
array.forEach((value, index) => {
	console.log(index)
	console.log(value)

	if (value == "Dima"){
		console.log(value[0])
	}
})

// for(let i = 0; i < array.length; ++i){
// 	console.log(i)
// 	console.log(array [i])
// }


let userNames = ["dima", "anton"]
console.log(userNames)
userNames.push("Artem")
console.log(userNames)
if (!userNames.includes("Maxim")){
	userNames.push("Maxim")
	console.log(userNames)
}



function showMessage(text){
	console.log(text)
}
showMessage("hello")



// function calc(a = 0, b = 0){
// 	const result = a + b
// 	console.log(result)
// }
// calc(20, 30)

function calc ( a = 0, b = 0){
	const calcSum = a + b
	showMessage(calcSum)

	function showMessage(someText = "Text"){
		console.log(someText)
	}
}
calc(30, 40)


let someInfo = ""
// console.log(someInfo)
// someInfo = someInfo + "Text"
// console.log(someInfo)
someInfo += `text`
console.log(someInfo)
someInfo += ` What about now dawg`
console.log(someInfo)



// =================================================================================================================== HOMEWORK ======================================================================================================
// Задача №1
// Що потрапить в консоль?

// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }
//В консоль потрапить 1 (інкремент 0 = 1)

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

for(let i = 0; i < 11; ++i){
	console.log(`Пункт № ${i}`)
}


// Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }
//1) 2*20=40; 40<=10 FALSE
//2) 15<5(false) and 10=10(true)  FALSE (треба щоб обидва значення дорівнювали true)
//3) 20==="20" FALSE (20 не дорівнює string "20")
// У консоль нічого не потрапить

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 
function divide(a = 10, b = 2) {
	let result = a / b
	if(b===0){
		console.log(`Error`)
	}
	else if(a===0){
		console.log(`Anyway 0`)
	}
	// else if(!isFinite(result)){
	// 	console.log("Incorrect")
	// }
	// Я взагалі не розумію як працює isFinite в цьому випадку
	// Сподіваюсь зможете пояснити
	else if(result === Infinity){
		console.log("I dont need that")
	}
	else if(result === NaN){
		console.log("No need you")
	}
	else{
		console.log(`Результат ділення: ${result}`)
	}
}
	divide(10, 2)
	divide(10, 0)
	divide(0, 5)
	divide(-20, 3)
	divide('a', 3)
	

// 	Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let someArray= [10, true, "dima", 300, "vscode"]
console.log(Array.isArray(someArray))
console.log(someArray.length)
console.log(someArray)
 someArray.forEach(value => {
	if(value === 10){
		console.log(value)
	}
});