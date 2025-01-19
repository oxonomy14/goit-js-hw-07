// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

//! Перший варіант рішення через цикл for
/*
const gallery = document.querySelector(".gallery");
gallery.classList.add("js-gallery-list");

const liArr = [];

for (let i = 0; i < images.length; i += 1) {
  const liElems = document.createElement("li");
  const imgElems = document.createElement("img");
  imgElems.src = images[i].url;
  imgElems.alt = images[i].alt;
  //imgElems.style.width = "360px";
  //imgElems.setAttribute("width", "360");
  liElems.append(imgElems);
  liElems.classList.add("js-gallery-item");
  //liElems.textContent = `Item ${i}`;
  liArr.push(liElems);
}

gallery.append(...liArr);
*/
//! Другий варіант рішення
const gallery = document.querySelector(".gallery");

function createdLi(imgElem) {
  return `<li class="js-gallery-item"><img src="${imgElem.url}" alt="${imgElem.alt}"></li>`;
}

function createdGallery(imgElems) {
  const muckup = imgElems.map(createdLi).join("");

  return muckup;
}

gallery.insertAdjacentHTML("beforeend", createdGallery(images));
gallery.classList.add("js-gallery-list");
