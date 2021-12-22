
import * as display from "./display.js";
import * as data from "./datalogic.js"

const title = document.getElementById('title');
display.createDisplay(); //loads initial display
display.buildProject("New Project"); //loads initial project button
let newProject = document.getElementsByTagName('button'); //gets first button
newProject[0].addEventListener('click', data.getProjectTitle);//adds listener to create new projects
//localStorage.clear();
debugger;
if (localStorage.length != 1) {
    for (let i = 1; i < (localStorage.length); i++) {
        display.buildProject(localStorage.getItem(`${i}`));
    }
}
console.log(data.todoContainer);
