let pisteet = 0;
document.getElementById("click").onclick = function() {
  pisteet++;
  document.getElementById("score").textContent = "Pisteet: " + pisteet;
};
