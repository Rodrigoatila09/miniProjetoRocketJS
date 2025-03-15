const inputUser = document.getElementById("userInput");
const addItems = document.getElementById("addItems");
const resultItems = document.getElementById("userItems");
const arrayItems = [];

addItems.addEventListener("click", () => {
  sendValue();
});

function sendValue() {
  arrayItems.push(inputUser.value);
  renderItems();
}

function renderItems() {
  resultItems.innerHTML = "";
  arrayItems.forEach((item, index) => {
    let newItem = document.createElement("p");
    let btnDelete = document.createElement("i");
    newItem.id = "pTag"

    newItem.textContent = item; 
    btnDelete.classList.add("fa-solid","fa-trash")

    btnDelete.addEventListener("click", () => deleteItem(index));
    
    newItem.appendChild(btnDelete);
    resultItems.appendChild(newItem);
  });
}

function deleteItem(index) {
  arrayItems.splice(index, 1);
  renderItems();
}
