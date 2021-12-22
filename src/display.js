import * as data from "./datalogic.js"

let projectCounter = 0;

const createDisplay = () => {
    let background = document.createElement("div");  //Flex container background
    background.style.display = "flex";
    background.style.flexWrap = "wrap";
    background.style.alignContent = 'flex-start';
    background.style.width = "800px";
    background.style.minHeight = "800px";
    background.style.backgroundColor = "#a3711757";
    background.style.margin = "50px";
    background.setAttribute('id', 'background');
    document.body.append(background);

    let title = document.createElement("h1");  //title
    title.style.width = "800px";
    title.style.height = "50px";
    title.style.textAlign = "Center";
    title.innerHTML = "To-Dos";
    title.style.borderBottom = "5px";
    title.style.borderBottomStyle = "solid";
    title.style.borderBottomColor = 'black';
    title.setAttribute('id', 'title')
    document.body.append(background);
    background.append(title);


    return {background, title};
}

const buildProject = (project) => { //Factory to create new Project buttons
    let background = document.getElementById('background');
    let p_icon = document.createElement('button');
    p_icon.style.width = "100px";
    p_icon.style.height = "100px";
    p_icon.style.textAlign = "Center";
    p_icon.setAttribute('class', 'project');
    p_icon.innerHTML = `${project}`;
    p_icon.style.border = "3px";
    p_icon.style.borderStyle = "solid";
    p_icon.style.borderColor = 'black';
    p_icon.style.margin = '50px';
    if (!localStorage.getItem(`${project}`)) {
        localStorage.setItem(`${projectCounter}`, `${project}`);
        projectCounter++;
    }

    if (project != "New Project") {
        p_icon.addEventListener('click', projectShift);
        p_icon.addEventListener('click', data.todoForm);
    }
    background.append(p_icon);
}

function repopulateDisplay() { //repopulates display upon navigation
    //let background = document.getElementById('background');
    for (let i = 0; i < localStorage.length; i++){
        display.buildProject(localStorage.key[i]);
    }
}

function projectShift() { //sets new screen
    debugger;
    let background = document.getElementById('background');
    let title = document.getElementById('title');
    let buttons = background.childNodes;
    let length = buttons.length
    title.innerHTML = this.innerHTML;
    for (let i = 1; i < length; i++){
        background.removeChild(buttons[1]);
    }
}




export {createDisplay, buildProject, repopulateDisplay, projectShift};