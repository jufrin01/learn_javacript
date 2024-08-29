let btn_todo = document.getElementById('btn_click');
let tasks = [
    {
        id:1,
        name : 'Belajar HTML',
        status : true
    },
    {
        id:2,
        name : 'Belajar CSS',
        status : false
    },
    {
        id:3,
        name : 'Belajar JavaScript',
        status : true
    },
    {
        id:4,
        name : 'Belajar React',
        status : false
    },
    {
        id:5,
        name : 'Belajar Vue',
        status : false
    }
]


function btn_click() {
    let input_task = document.getElementById('task_form').value;
  if(input_task !== ''){
      let id = tasks [tasks.length - 1].id + 1;
      let tempObject = {
          id,
          name: input_task,
          status: false
      }
      tasks.push(tempObject);
      getTasks();
      document.getElementById('task_form').value = '';
  }else{
      alert('Task cannot be empty');
  }
}

btn_todo.addEventListener('click', btn_click); {
  //  console.log(btn_todo);
}

    function getTasks() {
        let tBody = document.getElementById('tBody');
        tBody.innerHTML = '';  // Menghapus isi tbody sebelumnya agar data yang baru tersimpan diatasnya tampak
        tasks.forEach(task => {
            tBody.innerHTML += `<tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
            </tr>`;
        })
    }
    getTasks();
