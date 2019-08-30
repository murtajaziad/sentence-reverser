function reverse() {
  let text = document.getElementById("a").value;
  let result = document.getElementById("b")
  result.value = text.split("").reverse().join("");
}
