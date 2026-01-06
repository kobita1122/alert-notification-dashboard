function add(type) {
  const li = document.createElement("li");
  li.className = type;
  li.innerText = `${type.toUpperCase()} alert generated`;
  document.getElementById("alerts").appendChild(li);
}
