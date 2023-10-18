// selectors
const inputText = document.querySelector(".input-text");
const addBtn = document.querySelector(".addBtn");
const removeCheckedBtn = document.querySelector(".removeCheckedBtn");
const toDoList = document.querySelector(".to-do-list");

// add the to do
function addToDo(text) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("to-do-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const textNode = document.createElement("p");
  textNode.textContent = text;
  textNode.classList.add("to-do-text");

  newDiv.appendChild(checkbox);
  newDiv.appendChild(textNode);
  toDoList.appendChild(newDiv);

  // Add a click event listener to the checkbox
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      textNode.style.textDecoration = "line-through";
    } else {
      textNode.style.textDecoration = "none";
    }
  });
}

// Add a click event listener for the "Add" button
addBtn.addEventListener("click", function () {
  const input = inputText.value;

  if (input === "") {
    alert("Please type something");
  } else {
    addToDo(input);
    inputText.value = "";
  }
});

// Add a click event listener for the "Remove Checked" button
removeCheckedBtn.addEventListener("click", function () {
  const checkedItems = document.querySelectorAll(
    ".to-do-item .checkbox:checked"
  );
  checkedItems.forEach(function (checkedItem) {
    const toDoItem = checkedItem.parentElement;
    toDoItem.remove();
  });
});
