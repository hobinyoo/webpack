import _ from "lodash";

//onclick="buttonClicked()"와 같은 인라인 이벤트 핸들러가 실행되지 않는 이유는 Webpack은 각 모듈을 별도의 스코프에서 관리
//아래와 같이 작성해야함
document.getElementById("button1").addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");

    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});
