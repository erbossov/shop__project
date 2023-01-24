const header = {
  headers: {
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PUT",
    "Access-Control-Allow-Origin": "*",
  },
};

window.onload = () => {
  const headerTexts = document.getElementsByClassName("header-block_title");
  const clickIcon = document.getElementsByClassName("content-showerIcon");
  const categoryItem = document.getElementsByClassName(
    "category__hidden_inner__item"
  );
  const searchTitle = document.getElementsByClassName("search__title")[0];
  const clickColorLetter = document.getElementsByClassName(
    "category-list__letter"
  );
  const hiddenBlock = document.getElementsByClassName(
    "category__hidden__content"
  );
  const imageBody = document.getElementsByClassName("item");
  const data = fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  // Route handling
  for (const header of headerTexts) {
    const text = header.innerText;
    header.addEventListener("click", () => {
      location.assign(`${text}.html`);
    });
  }

  for (let i = 0; i < clickIcon.length; i++) {
    clickIcon[i].addEventListener("click", () => {
      clickIcon[i].classList.toggle("rotateArrow");
      hiddenBlock[i].classList.toggle("show");
      clickColorLetter[i].classList.toggle("clickColor");
    });
  }

  for (let i = 0; i < categoryItem.length; i++) {
    categoryItem[i].addEventListener("click", () => {
      if (categoryItem[i].innerText === "For men") {
        data.then((res) => {
          const menClothing = res.filter(
            (el) => el.category === "men's clothing"
          );
          for (let i = 0; i < menClothing.length; i++) {
            imageBody[i].setAttribute("src", menClothing[i].image);
          }
        });
      } else {
        data.then((res) => {
          const womenClothing = res.filter(
            (el) => el.category === "women's clothing"
          );
          for (let i = 0; i < womenClothing.length; i++) {
            imageBody[i].setAttribute("src", womenClothing[i].image);
          }
        });
      }
      // }
      searchTitle.innerText = `All items for category: ${categoryItem[i].innerText}`;
    });
  }
};

// // Asynchronous functions (async / await)

// async function showItemsByCategory (categoryItem, itemImages) {

//   // Promise -> then(функция при успешном запросе, при неуспешном), catch(функция), finally(функция)
//   // NO -> fetch().then().catch()
//   // YES -> fetch() async / await

//   const res = await (await fetch('https://fakestoreapi.com/products')).json();
//   // 200, 300, 400, 500
//   // 200 -> успешный запрос
//   // 300 -> сайт либо переместили куда-то или удален
//   // 400 -> ошибка со стороны пользователя
//   // 500 -> ошибка со стороны сервера

//   // Pending Promise (Pending, Fulfilled, Rejected, Settled)
//   const selectedCategory = categoryItem.innerText === 'For men' ? "men's clothing" : "women's clothing"
//   const filteredItems = res.filter(item => item.category === selectedCategory)
//   filteredItems.forEach((element, index) => {
//       itemImages[index].setAttribute('src', element.image);
//   })
// }

// // 2 function -> обработку (не асинхронные)
// // 1 function -> отвечает за сохранение данных каждые 10 секунд (async)
// // 1 function -> отвечает за обновление данных каждые 10 секунд (async)

// // NO ASYNC
// // 1 -> 0sec
// // 2 -> 0sec

// // ASYNC
// // 1 -> 0sec
// // 2 -> 0sec

// // 10 секунд -> 20 sec
// // 0 секунд -> 10 sec
