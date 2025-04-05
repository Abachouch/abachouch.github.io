document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
});

const projectobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      if (intersecting) entry.target.classList.add("inview");
      else entry.target.classList.remove("inview");
    });
  },
  { threshold: 0.5, rootMargin: "50px" }
);
document.querySelectorAll(".home-scroll-observer").forEach((item) => {
  projectobserver.observe(item);
});
