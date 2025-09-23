window.onload = function() {
  alert("haaalllllooooooooo");
};
function flipCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle("flipped");
}