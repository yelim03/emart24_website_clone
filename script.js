const mobGnbDrop = document.querySelectorAll(".gnb-listbox-title");
const mobGnbTitles = document.querySelectorAll(
  ".gnb-listbox-title > .title > h1"
);
const mobGnbLists = document.querySelectorAll(".gnb-list-detail");
const mobGnbDropIcons = document.querySelectorAll(
  ".gnb-listbox-title .dropicon"
);

mobGnbLists.forEach((list) => {
  list.style.display = "none";
});
mobGnbTitles.forEach((title) => {
  title.style.color = "#333";
});
mobGnbDropIcons.forEach((icon) => {
  icon.style.transform = "rotate(-180deg)";
});

mobGnbDrop.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    // mobGnbTitles[index].style.color = "#f9bb00";

    const currentList = mobGnbLists[index].style.display;
    const currentTitleColor = mobGnbTitles[index].style.color;

    mobGnbLists[index].style.display =
      currentList === "none" ? "block" : "none";
    mobGnbTitles[index].style.color =
      currentTitleColor === "rgb(3,3,3)" ? "#f9bb00" : "#000";
    mobGnbDropIcons[index].style.color =
      currentTitleColor === "rgb(3,3,3)" ? "#f9bb00" : "#000";
  });
  // 모바일 화살표 180도 돌아가는거 구현해야함
});
