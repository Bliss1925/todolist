import * as display from './display.js';

let todoContainer = [];


function getProjectTitle() { //function to build new project from input
    let title = window.prompt("Title of Project:");
    let button = display.buildProject(title);
    
}

const todo = (priority) => { //factory for todos
    debugger;
    let title = document.getElementById('title');
    let pvalue = document.getElementById('priority');
    let nvalue = document.getElementById('notes');
    let dvalue = document.getElementById('date');
    priority = pvalue.value;
    let key = title.innerHTML; 
    let notes = nvalue.value;
    let date = dvalue.value;

    //include function to store here
    todoContainer.push({key, priority, notes, date});
    populateTodos(priority, key, notes, date);
}

const todoForm = () => { //displays form for todo inputs
    let background = document.getElementById('background');
    
     
    let PL = document.createElement('label');
    PL.setAttribute('for', 'priority');
    PL.innerHTML = 'Priority: High, Medium, or Low';
    let priority = document.createElement('input');
    priority.setAttribute('type', 'text');
    priority.setAttribute('name', 'priority');
    priority.setAttribute('id', 'priority');

    let NL = document.createElement('label');
    NL.setAttribute('for', 'notes');
    NL.innerHTML = 'Task:';
    let notes = document.createElement('input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('name', 'notes');
    notes.setAttribute('id', 'notes');

    let DL = document.createElement('label');
    DL.setAttribute('for', 'date');
    DL.innerHTML = 'Due Date:';
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.setAttribute('id', 'date');

    

    let submit = document.createElement('button');
    submit.setAttribute('id', 'submit');
    submit.innerHTML = 'Submit';
    submit.addEventListener('click', todo);
    background.append(PL);
    background.append(priority);
    background.append(NL);
    background.append(notes);
    background.append(DL);
    background.append(date);
    background.append(submit);
    
}

function populateTodos(priority, key, notes, date) {
    let background = document.getElementById('background');
    let todoDisplay = document.createElement('div');
    todoDisplay.style.display = 'flex';
    let prioritySymbol = document.createElement('div');
    prioritySymbol.style.display = 'inline';
    if (priority = 'high') {
        prioritySymbol.innerHTML = 'High';
        prioritySymbol.style.color = 'red';
    }
    else if (priority = 'medium') {
        prioritySymbol.innerHTML = 'Mid';
        prioritySymbol.style.color = 'yellow';
    }
    else if (priority = 'low') {
        prioritySymbol.innerHTML = 'Low';
        prioritySymbol.style.color = 'green';
    }

    let notesDisplay = document.createElement('div')
    notesDisplay.style.display = 'inline';
    notesDisplay.innerHTML = notes;

    let dateDisplay = document.createElement('div');
    dateDisplay.style.display = 'inline';
    dateDisplay.innerHTML = date;

    todoDisplay.append(prioritySymbol);
    todoDisplay.append(notesDisplay);
    todoDisplay.append(dateDisplay);
    background.append(todoDisplay);
}
export {getProjectTitle, todo, todoForm, todoContainer}