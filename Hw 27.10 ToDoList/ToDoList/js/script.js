
    let inputTask = document.getElementById('inputTask');
   

function callTaskAdd () {
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
        inputTask.style.display = 'none';
        errorMessage.innerHTML = '';
    
    
        let inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.classList.add('task-container__check-box');
        inputCheckbox.addEventListener('change', forCheckTask);
        section.appendChild(inputCheckbox);

    
       
        
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

    
    function forCheckTask (event) {
        let tar = event.target;
            if(tar.tagName === "INPUT") {
                tar.parentElement.classList.toggle('bg-color');
            }
    }