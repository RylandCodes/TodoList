const makeTodoDateInput = document.getElementById("make-todo-date");
const makeTodoNameInput = document.getElementById("make-todo-name");
const createTodoButton = document.getElementById("create-button");
const todoContainer = document.getElementById("todo-container");



createTodoButton.addEventListener("click", () => {
     TodoDate = makeTodoDateInput.value;
     TodoName = makeTodoNameInput.value;
     const todoHTMLcode = `
     <div class="todo">
          <p class="todo-name">${TodoName}</p>
          <p class="todo-date">${TodoDate}</p>
          <button onclick="this.parentElement.remove();" class="delete-button">Delete</button>
     </div>
     `;
     todoContainer.innerHTML += todoHTMLcode;
     makeTodoDateInput.value = "";
     makeTodoNameInput.value = "";
});