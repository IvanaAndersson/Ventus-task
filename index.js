const designTabLink = document.getElementById("tab-design");
const productionTabLink = document.getElementById("tab-production");

const designContent = document.querySelector(".design-content");
const productionContent = document.querySelector(".production-content");

productionContent.style.display = "none";

productionTabLink.addEventListener("click", (_e) => {
  designTabLink.classList.remove("active");
  designContent.style.display = "none";
  productionTabLink.classList.add("active");
  productionContent.style.display = "flex";
});
designTabLink.addEventListener("click", (_e) => {
  productionTabLink.classList.remove("active");
  productionContent.style.display = "none";
  designTabLink.classList.add("active");
  designContent.style.display = "flex";
});

const facebookIcon = document.getElementById("fa-facebook");
const socialLinks = document
  .querySelector(".social-media-icons")
  .querySelectorAll("li a");

socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    if (e.target instanceof HTMLElement) {
      const span = e.target.children[0];
      span.classList.remove("d-none");
      span.classList.add("tooltip");
    }
  });
  link.addEventListener("mouseleave", (e) => {
    if (e.target instanceof HTMLElement) {
      const span = e.target.children[0];
      span.classList.remove("tooltip");
      span.classList.add("d-none");
    }
  });
});
