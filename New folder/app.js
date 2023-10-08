//#region DOM Elements
const todosUL = document.getElementById("todosUL");
const searchForm = document.getElementById("searchForm");
const searchText = document.getElementById("searchText");
const addForm = document.getElementById("addForm");
const addText = document.getElementById("addText");

//#endregion

//#region Initial Data Source
let todosList = ["Play Tennis", "Deliver JS Assignment", "Learn New Techs"];

let todosArray = ["Play Tennis", "Deliver JS Assignment", "Learn New Techs"];
//#endregion



//#region AddTodo
const createTodoLI = (todo) => `<li
          class="list-group-item d-flex justify-content-between align-items-center"
          id = ""
        >
          <span id = "">${todo}</span>
          <i class="far fa-trash-alt delete" id =""></i>
        </li>`;
//#endregion



//#region BindTodosToDom
// دي بتستقبل ليستة و بتعيد رسمها في الصفحة
const BindTodosToDom = (todos) => {
  todosUL.innerHTML = todos.map(createTodoLI).join("");
};
//#endregion



//#region Search Todos
const searchTodos = (todoSearchText, list) => {
  let FilteredTodos = list.filter((todo) => (todo.toUpperCase()).includes(todoSearchText.toUpperCase()));
  BindTodosToDom(FilteredTodos);
};
//#endregion

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchedText = searchText.value;
  searchTodos(searchedText, todosList);
});

const addedText = (text) => todosList.push(text); 

addForm.addEventListener("submit" , (e) => {
  e.preventDefault();
  addedText(addText.value);
  BindTodosToDom(todosList);
})





BindTodosToDom(todosList);

