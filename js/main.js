const video = document.getElementById("introVideo");
const button = document.getElementById("startBtn");
const overlay = document.getElementById("buttonOverlay");

// ✅ Preload the video data ASAP
video.load();

button.addEventListener("click", () => {
    overlay.style.display = "none";
    video.play();

    video.addEventListener("ended", () => {
        window.location.href = "pages/page1.html";
    });
});
