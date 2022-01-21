const row = document.querySelector(".row");

const myImage = async () => {
  const response = await fetch(`data.json`);
  const data = await response.json();
  data.forEach((element) => {
    const loderImg = `
    <div class="col-lg-4 col-sm-12 d-flex justify-content-between mt-3">
        <img src="${element.url}" />
    </div>
    `;
    row.insertAdjacentHTML("beforeend", loderImg);
  });
};

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
    myImage();
  }
});
