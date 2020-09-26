const btnContainer = document.querySelector(".toggle_charts_display_container");
const btns = document.querySelectorAll(".charts_display-btn");

btnContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active-btn");
      e.target.classList.add("active-btn");
    });
  }
});
