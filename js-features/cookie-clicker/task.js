const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let count = 0;

image.addEventListener("click", changeSize);

function smallSize() {
    image.width = 150;
    image.height = 100;
}
function bigSize() {
    image.width = 200;
    image.height = 150;
}

function changeSize() {
    clicker.innerHTML = count;
    count++;
    if (count % 2) {
        smallSize();
    } else {
        bigSize();
    }

}