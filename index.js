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
    "category__hidden__inner__item"
  );
  const colorLetter = document.getElementsByClassName("category-list_letter");
  const hiddenBlock = document.getElementsByClassName(
    "category__hidden__content"
  );
  const searchTitle = document.getElementsByClassName("search__title")[0];
  const itemImages = document.getElementsByClassName("item__image");
  const searchInput = document.getElementsByClassName("search__input")[0];
  const hiddenDropdown = document.getElementsByClassName("search__dropdown")[0];
  const dropdownTexts = document.getElementsByClassName(
    "search__dropdown__text"
  );

  searchInput.addEventListener("focus", () => {
    if (hiddenDropdown.classList.contains("hidden")) {
      hiddenDropdown.classList.remove("hidden");
    }
  });

  for (const text of dropdownTexts) {
    text.addEventListener("click", () => {
      showItemsByCategory(text, itemImages);
      searchTitle.innerText = `All items for category: ${text.innerText}`;
      hiddenDropdown.classList.add("hidden");
    });
  }

  for (const header of headerTexts) {
    const text = header.innerText;
    header.addEventListener("click", () => {
      location.assign(`${text}.html`);
    });
  }

  for (let i = 0; i < clickIcon.length; i++) {
    clickIcon[i].addEventListener("click", () => {
      for (let j = 0; j < clickIcon.length; j++) {
        clickIcon[j].classList.remove("rotateArrow");
        hiddenBlock[j].classList.remove("show");
        colorLetter[j].classList.remove("clickColor");
      }
      clickIcon[i].classList.toggle("rotateArrow");
      hiddenBlock[i].classList.toggle("show");
      colorLetter[i].classList.toggle("clickColor");
    });
  }

  for (let i = 0; i < categoryItem.length; i++) {
    categoryItem[i].addEventListener("click", () => {
      showItemsByCategory(categoryItem[i], itemImages);
      searchTitle.innerText = `All items for category ${categoryItem[i].innerText}`;
    });
  }
};

async function showItemsByCategory(categoryItem, itemImages) {
  const selectedCategory =
    categoryItem.innerText === "For men"
      ? "men's clothing"
      : "women's clothing";
  const res = await (
    await fetch("https://fakestoreapi.com/products", header.headers)
  ).json();
  const filteredItems = res.filter(
    (item) => item.category === selectedCategory
  );
  console.log(filteredItems);
  filteredItems.forEach((element, index) => {
    itemImages[index].setAttribute("src", element.image);
  });
}
