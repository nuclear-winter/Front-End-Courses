

function callTaskAdd () {
    let inputTask = document.getElementById('inputTask');
        inputTask.style.display = 'block';
    }
    
    function addNewTask () {
        let getText = document.getElementById('taskField').value;
        let errorMessage = document.getElementById('error');
    
    
        let taskContainer = document.getElementById('taskContainer');
        let section = document.createElement('section');

        if (getText === '') {
            errorMessage.innerHTML = 'Please, input task';
        } else {
        section.classList.add('main-content__task-container', 'border-to-all');
        taskContainer.appendChild(section);
    
    
        let inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.classList.add('task-container__check-box');
        section.appendChild(inputCheckbox);
    
       
        errorMessage.innerHTML = '';
        let textP = document.createTextNode( getText );
        let p = document.createElement('p');
        p.classList.add('task-container__task-text');
        p.appendChild( textP );
        section.appendChild(p);
        document.getElementById('taskField').value = '';
        
        
    
        let textSpan = document.createTextNode('\u00D7');
        let span = document.createElement('span');
        span.classList.add('task-container__close-box', 'border-to-all');
        span.setAttribute('onclick', 'parentElement.remove()');
        span.appendChild(textSpan);
        section.appendChild(span);
        }
    
    }

    let checkTask = document.querySelector('input[type=checkbox]');
    console.log(checkTask);

    checkTask.addEventListener('click', forCheckTask);

    function forCheckTask (event) {
        let tar = event.target;
         if (tar.tagName === 'input') {
             tar.classList.add('bg-color');
         }
    }