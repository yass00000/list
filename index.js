let addtodobutton = document.getElementById('addtodo');
let todocontrainer = document.getElementById('todocontrainer');
let inputfieled = document.getElementById('inputfieled');

addtodobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfieled.value;
    todocontrainer.appendChild(paragraph);
    inputfieled.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-throught";
    })
    paragraph.addEventListener("dblclick",function(){
        todocontrainer.removeChild(paragraph);
    })
    })
