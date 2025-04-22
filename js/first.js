document.body.classList.add("lock-scroll");

const video = document.getElementById("firstVideo");
const title = document.getElementById("revealTitle");
const overlay = document.getElementById("videoOverlay");

video.addEventListener("ended", () => {
  // Fade in the title
  title.style.opacity = 1;

  // Wait a moment, then unlock scroll and convert overlay to static block
  setTimeout(() => {
    document.body.classList.remove("lock-scroll");
    overlay.classList.add("unlocked"); // make it scrollable
  }, 300);
});
