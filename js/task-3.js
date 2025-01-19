// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input)
//  підставляє його поточне значення в span#name - output як ім’я для привітання.
//   Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const userNameElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

//console.log(userNameElem);

// userNameElem.addEventListener("input", onInputChange);

// function onInputChange() {
//   console.log(userNameElem.value);

//   if (userNameElem.value.trim() === "" || userNameElem.value.trim() === " ") {
//     outputElem.textContent = "Anonymous";
//   } else {
//     outputElem.textContent = userNameElem.value.trim();
//   }
// }

//! 2 варіант з стрілочною функцією

userNameElem.addEventListener("input", (evt) => {
  if (evt.target.value.trim() === "" || evt.target.value.trim() === " ") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = evt.target.value.trim();
  }
});
