"use strict"
// -------------------------------------------------

// ===============================================================================================================================================================================

//  ---------------------------------------InnerHeight/Width-----------------------------------------------------------------------

// const windowWidth = window.innerWidth
// console.log(windowWidth)

// const windowHeight = window.innerHeight
// console.log(windowHeight)
// if(windowWidth > 1000){
// 	// alert("Tablet enabled")
// 	prompt("Tablet enabled")
// }

//  ----------------------------------------------NAVIGATOR BROWSER------------------------------------------------------------------

// console.log(navigator.userAgent)

// ------------------------------------------------------CONFIRM ---------------------------------------------------------------------

// let confirmAnswer = confirm("Do you accept all cookies?")
// if(confirmAnswer){
// 	console.log("User agree")
// }
// else{
// 	console.log("User doesnt agree")
// }

// ------------------------------------------------------PROMPT------------------------------------------------------------------------

// let promptAnswer = prompt("Do you accept all cookies?")
// if(promptAnswer === null){
// 	console.log("User didnt accept cookies")
// }
// else if(promptAnswer){
// 	console.log(`User says : ${promptAnswer}`)
// }
// else(
// 	console.log(`User accepted cookies`)
// )

// ------------------------------------------------------DOCUMENT OBJECT MODEL DOM   MUST HAVE !------------------------------------------------------------------------

                                                                                                 // 1) NAVIGATION ON DOCUMENT

// const htmlElement = document.documentElement
// console.log(htmlElement)

// const headElement = document.head
// console.log(headElement)


// const bodyElement = document.body
// const firstElementChild = bodyElement.firstElementChild
// console.log(firstElementChild)
// const lastElementChild = bodyElement.lastElementChild
// console.log(lastElementChild)


// const bodyElement = document.body
// const children = bodyElement.children
// console.log(children)
// console.log(Array.isArray(children))
// for (let i = 0; i < children.length; ++i){
// 	console.log(children[i])
// }


// const bodyElement = document.body
// const siblings = bodyElement.previousElementSibling
// console.log(siblings)


// ------------------------------------------------------NEEDED ALWAYS------------------------------------------------------------------------

// const liElement = document.querySelector('.item')
// console.log(liElement)
// if (liElement){
// 	console.log("Working")
// }

// const liItems = document.querySelectorAll('li')
// console.log(liItems)
// console.log(Array.isArray(liItems))
// // for(let i = 0; i < liItems.length; ++i){
// // 	console.log(liItems[i])
// // }
// if(liItems.length){
// 	liItems.forEach(element => {
// 		console.log(element)
// 	});
// }

// -------------------------------------------------------------PARENT ELEMENT-----------------------------------------------------------------

// const ulElement = document.querySelector('.list')
// const parentElement = ulElement.parentElement
// console.log(parentElement)




                                                                                          // 2)ADJUST THE DOCUMENT
// const liElements = document.querySelectorAll('li')
// liElements.forEach(item => {
// 	item.innerHTML = '<span>JS</span>'
// })


//  const liElements = document.querySelectorAll('li')
//  liElements.forEach(item => {
// 	item.textContent = 'Js is complicated cuz I feel discombobulated'
//  })

																														// 3)CREATE THE ELEMENT
// let newItem = document.createElement('div')
// console.log(newItem)
// newItem.innerHTML = '<a href="#">About Us</a>'
// const wrapper = document.querySelector('.wrapper')
// // wrapper.before(newItem)
// // wrapper.after(newItem)
// // wrapper.prepend(newItem)
// wrapper.append(newItem)


// INNER ADJACENT HTML/TEXT/ELEMENT
// beforebegin - before the wrapper
// afterbegin - wrappers begin
// beforeend - in the end of the wrapper
// afterend - after the wrapper 



// const wrapper = document.querySelector('.wrapper')
// wrapper.insertAdjacentHTML('afterBegin',
// `<div class="block">
// 	<div class="block__item"></div>
// </div>`)


// const mainPage = document.querySelector('main')
// mainPage.insertAdjacentHTML('afterbegin',
// `<div class="page__hero hero">
// 	<div class="hero__container"></div>
// </div>`
// )

// const text = `
// <div class="header-block">
// 	<h1>Why us</h1>
// 	<p>Content about us</p>
// </div>`
// mainPage.insertAdjacentText('afterbegin', text)

// const mainPage = document.querySelector('main')
// let newItem = document.createElement('div')
// newItem.innerHTML = `<div class="page__hero hero"></div>`
// mainPage.insertAdjacentElement('afterbegin', newItem)

// const wrapper = document.querySelector('.wrapper')
// let newObject = document.querySelector('.list')
// wrapper.insertAdjacentElement('afterbegin', newObject)

// const mainPage = document.querySelector('main')
// mainPage.insertAdjacentHTML('afterbegin',
// 	`<div class="page__hero hero"></div>`
// )


																																			// 4) COPY ELEMENT
// const wrapper = document.querySelector('.wrapper')
// const copyWrap = wrapper.cloneNode(true)
// console.log(copyWrap)																																		
																																			// 5) DELETE ELEMENT
// const list = document.querySelector('.list')
// list.remove()													

																// -------------------------------------------------------------CLASS NAME/LIST-----------------------------------------------------------------		
// almost useless**																																			
// const list = document.querySelector('.list')
// list.className = 'some-class'

// const list = document.querySelector('.list')
// list.classList.add('list--red')
// list.classList.remove('list--red')

// const list = document.querySelector('.list')
// list.classList.toggle('active')
// list.classList.contains('active')
// if(list.classList.contains('active')){
// 	console.log("yeap")
// }
																																				// 6) DELETE ELEMENT
// const list = document.querySelector('.list')	(add something new)
// let newPadding = 10 + 15
// list.style.paddingLeft = `${newPadding}px`	

// const list = document.querySelector('.list') (replace the properties)
// list.style.cssText = `
// padding-top: 45px;
// background-color: yellow;
// width: 30%;
// `


// const list = document.querySelector('.list')
// const listStyle = getComputedStyle(list)
// // console.log(listStyle)
// let listFontSize = parseFloat(listStyle.fontSize)
// if(listFontSize < 50){
// 	list.style.backgroundColor = 'yellow';
// 	list.style.color = 'red'
// }

																																					// 7) ATTRIBUTE

// const list = document.querySelector('.list')
// let speed = list.dataset.speedAnimation
// console.log(speed)



// const liElement = document.querySelector('li')
// let durationAnimation = parseFloat(liElement.dataset.speedAnimation)
// console.log(durationAnimation)
// liElement.dataset.speedAnimation = 5000



// const liElements = document.querySelectorAll('li')
// let durationAnimations = liElements.dataset.speedAnimation
// console.log(durationAnimations)  <¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ Цікавить дуже момент, чому при querySelectorAll видає помилку. Буду вдячний, якщо зможете пояснити цей момент мені


// const list = document.querySelector('.list')
// console.log(list.tagName)
// if(list.tagName === 'UL'){
// 	console.log('Success')
// }
// list.hidden = true


																																						// 8) SCROLL
// window.scrollTo({
// 	top: 1000,
// 	left: 0,
// 	behavior: 'smooth'
// })		



// SCROLL TO OBJECT

// const list = document.querySelector('.list')
// function sctollToBLock(element) {
// 	element.scrollIntoView({
// 		// start,  center,  end
// 		block: 'center',

// 		// start, center, end, nearest (horizontal scroll)
// 		inline: 'nearest',
// 		behavior: 'smooth'
// 	})
// }
// sctollToBLock(list)


// const list = document.querySelector('.list')
// function sctollToBlock (element){
// 	const block = element.dataset.scroll
// 	element.scrollIntoView({
// 		block: block,
// 		behavior: 'smooth'
// 	})
// }
// sctollToBlock(list)


// const list = document.querySelector('.list')
// function scrollToElement (element) {
// 	const item = element.dataset.scroll
// 	element.scrollIntoView({
// 		behavior: 'smooth',
// 		block: item,
// 	})
// }
// scrollToElement(list)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HOMEWORK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

																					// Задача №1
																					// Отримати в константу елемент <body>
// const body = document.body
// console.log(body)																					
																					// Задача №2
																					// Написати функцію, яка додає в <body> список UL
																					// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)



																
																					// Задача №3
																					// Додати до елементу <body> класс loaded.
																					// Потім перевірити чи є клас loaded у елемента <body>
																					// і, якщо є, додати стиль кольору тесту зедлений.

// const body = document.querySelector('body')
// body.classList.toggle('loaded')
// if(body.classList.contains('loaded')){
// 	body.style.color = 'green'
// }



																					// Задача №4
																					// Дано в html: три елементи з класом item.
																					// Треба отримати ці елементи в константу, кожному додати клас active, 
																					// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".



																					// Задача №5
																					// Дано в html: текст, далі кнопка з класом button.
																					// Треба прокрутити скрол сторінки до кнопки

// const body = document.querySelector('body')
// const button = document.querySelector('button')
// if(button){
// 	button.classList.toggle('button')
// }
// function scrollToBtn (btn){
// 	const scroll = btn.dataset.scroll
// 	btn.scrollIntoView({
// 		behavior: 'smooth',
// 		block : scroll,
// 	})
// }
// scrollToBtn(button)

																					// Задача №6
																					// Дано в html: посилання з класом link
																					// Треба додати до посилання дата атрибут зі значенням 100
																					// Поім отримати значення трибуту, та, якщо значення меньше 200
																					// пофарбувати колір тексту посилання в червоний

// const body = document.querySelector('body')
// const newLink = `<a href="#" class="link">I am link</a>`
// body.insertAdjacentHTML('afterbegin', newLink)
// newLink.dataset.newValue = 100
// let newValue = parseFloat(newLink.dataset.newValue)
// if(newValue < 200){
// 	newLink.style.color = 'red';
// }

// Не можу зрозуміти чого теж самий код не працює через додавання елементу

const newLink = document.querySelector('a')
newLink.dataset.newValue = 100
let newValue = parseFloat(newLink.dataset.newValue)
if (newValue < 200) {
	newLink.style.color = 'red'
}



