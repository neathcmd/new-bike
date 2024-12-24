document
  .querySelector(".highlight-info")
  .addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollSpeed = 5;
    this.scrollLeft += event.deltaY * scrollSpeed;
  });
