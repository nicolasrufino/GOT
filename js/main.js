const video = document.getElementById("introVideo");
const button = document.getElementById("startBtn");
const overlay = document.getElementById("buttonOverlay");

button.addEventListener("click", () => {
  overlay.style.display = "none"; // Hide button overlay
  video.play(); // Play the video

  // When video ends, go to next page
  video.addEventListener("ended", () => {
    window.location.href = "pages/page1.html"; // Adjust path if needed
  });
});
