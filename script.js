import {addTask} from "./Components/addTask.js";
import {displayTasks} from "./Components/displayTasks.js";

//Immediately invoked function expression IIFE
//(() => {
    const btn = document.querySelector("[data-form-btn]")

    btn.addEventListener("click",  addTask);

    displayTasks();

//})();