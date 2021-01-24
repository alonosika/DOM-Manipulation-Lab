const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", addItem);

function addItem () {
    const itemName = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.textContent = itemName;
    button.textContent = "Delete";
    button.addEventListener("click", function(){ listItem.remove(); });
    listItem.appendChild(span);
    listItem.appendChild(button);
    list.appendChild(listItem);
}