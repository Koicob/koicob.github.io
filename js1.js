let count = 0;


document.getElementById("counter").innerText = data;

function tickup() {
count = count + 1;
    document.getElementById("counter").innerText = data;
}

function tickdown() {
  count = count - 1;
    document.getElementById("counter").innerText = data;
}
