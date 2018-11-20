var socket = io();
const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

play.addEventListener("click", () => {
  console.log("emitt");
  socket.emit("video", { state: "play" });
  console.log("emitted");
  video.play();
});
pause.addEventListener("click", () => {
  socket.emit("video", { state: "pause" });
  video.pause();
});

socket.on("video", function(data) {
  if (data.state === "play") {
    video.play();
  } else {
    video.pause();
  }
});
