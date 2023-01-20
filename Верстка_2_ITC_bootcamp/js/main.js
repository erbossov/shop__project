window.onload = () => {
  const clickIcon = document.getElementsByClassName("content-showerIcon");
  const categoryItem = document.getElementsByClassName(
    "category__hidden_inner__item"
  );
  const searchTitle = document.getElementsByClassName('search__title')[0];
  const clickColorLetter = document.getElementsByClassName(
    "category-list__letter"
  );
  const hiddenBlock = document.getElementsByClassName(
    "category__hidden__content"
  );

  for (let i = 0; i < clickIcon.length; i++) {
    clickIcon[i].addEventListener("click", () => {
      clickIcon[i].classList.toggle("rotateArrow");
      hiddenBlock[i].classList.toggle("show");
      clickColorLetter[i].classList.toggle("clickColor");
    });
  }

  for (let i = 0; i < categoryItem.length; i++) {
    categoryItem[i].addEventListener('click', () => {
      // if (categoryItem[i].innerText === 'For women') {
        
      // }
      searchTitle.innerText = `All items for category: ${categoryItem[i].innerText}`
    })
  }
};
