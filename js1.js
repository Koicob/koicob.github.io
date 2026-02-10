let count = 0;


document.getElementById("counter").innerText = count;

function tickUp() {
count = count + 1;
    document.getElementById("counter").innerText = count;
}

function tickDown() {
  count = count - 1;
    document.getElementById("counter").innerText = count;
}
