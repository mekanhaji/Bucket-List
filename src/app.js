const form = document.getElementById("cart-form");
const items = document.getElementById("items");
const button = document.getElementById("add-button");

const followSwipe = (container, handleSwipe) => {
  let startX = null;
  let startY = null;

  container.addEventListener("touchstart", (event) => {
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
  });

  container.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const swipeDistanceX = Math.abs(startX - endX);
    const swipeDistanceY = Math.abs(startY - endY);

    let swipeDirection;
    if (swipeDistanceX > swipeDistanceY && swipeDistanceX > 50) {
      swipeDirection = startX < endX ? "right" : "left";
    } else if (swipeDistanceY > swipeDistanceX && swipeDistanceY > 50) {
      swipeDirection = startY < endY ? "down" : "up";
    }

    // Handle swipe direction
    handleSwipe(swipeDirection);
  });
};

let list = JSON.parse(localStorage.getItem("cart-list")) || [];

const append = (item) => {
  list.push(item);
  localStorage.setItem("cart-list", JSON.stringify(list));
};

const remove = (index) => {
  list = list.splice(index, 1);

  localStorage.setItem("cart-list", JSON.stringify(list));
  renderItems();
  console.log(list);
};

const renderItems = () => {
  items.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.id = `${list.length}`;

    li.addEventListener("dblclick", (e) => {
      const index = li.id;

      remove(index);
    });

    followSwipe(li, (direction) => {
      if (direction == "right") {
        const index = li.id;

        remove(index);
      }
    });

    items.append(li);
  });
};

renderItems();

const onSubmit = () => {
  const item = document.getElementById("input-field").value;

  append(item);
  renderItems();
  console.log(list);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onSubmit();
});

button.addEventListener("click", () => {
  onSubmit();
});
