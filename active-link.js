document.querySelectorAll(".nav-link").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    document
      .querySelectorAll(".nav-link")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active");
  })
);
