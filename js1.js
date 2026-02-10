let count = 0;


document.getElementById("counter").innerText = count;

function tickup() {
count = count + 1;
    document.getElementById("counter").innerText = count;
}

function tickdown() {
  count = count - 1;
    document.getElementById("counter").innerText = count;
}
