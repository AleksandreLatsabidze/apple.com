const colorbtn = document.querySelectorAll(".btnjs");
const elements = document.querySelectorAll(".editclass");

colorbtn.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    document.getElementById("video-center").style.display = "none";
    let dataattribute = box.getAttribute("btnid");
    elements.forEach((element) => {
      element.classList.remove("newclass");
    });
    document.getElementById("purpletitle-" + dataattribute).className =
      "newclass";
    document.getElementById("purpleimg-" + dataattribute).className =
      "newclass";
  });
});

const elemmenu = document.getElementById("menubg");

function changeTo(x) {
  elemmenu.style.backgroundColor = "#333";
}
function changeBack(x) {
  elemmenu.style.backgroundColor = "transparent";
}
