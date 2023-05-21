const input = document.querySelector('.input');
const abertoContainer = document.querySelector('.aberto');
const finalizadoContainer = document.querySelector('.finalizado');

function createTask(taskText, finished = false) {
  const task = document.createElement('div');
  task.classList.add('task');

  const taskTextElement = document.createTextNode(taskText);

  const deleteButton = document.createElement('i');
  deleteButton.classList.add('fas', 'fa-trash-alt');

  task.appendChild(taskTextElement);
  task.appendChild(deleteButton);

  if (!finished) {
    const checkButton = document.createElement('i');
    checkButton.classList.add('fas', 'fa-check');
    task.appendChild(checkButton);

    checkButton.addEventListener('click', () => {
      task.removeChild(checkButton);
      task.classList.add('finished');
      finalizadoContainer.appendChild(task);
    });
  }

  deleteButton.addEventListener('click', () => {
    task.remove();
  });

  return task;
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 

    const taskText = input.value.trim(); 

    if (taskText !== '') {
      const task = createTask(taskText); 
      abertoContainer.appendChild(task); 
      input.value = ''; 
    }
  }
}

input.addEventListener('keypress', handleKeyPress);