const full_body = document.body

const tasks = []

function TasksList(){

    const all_list = document.querySelector('.ul-task')
    all_list.innerHTML = ''
    
    tasks.forEach((element, index)=>{

        const list = document.createElement('li')
        list.innerHTML = element

        const input_chk = document.createElement('input')
        input_chk.type = 'checkbox'
        input_chk.checked = element.completed
        input_chk.onchange = () => checkbox_verify(index)

        list.textContent = element.text
        if(element.completed){
            list.style.textDecoration = 'line-through'
        }

        const btn_delet = document.createElement('button')
        btn_delet.textContent = 'X'
        btn_delet.onclick = () => del_task(index)
        btn_delet.id = 'btn-close'
        
        list.append(input_chk)
        list.append(btn_delet)
        all_list.append(list)
    })
}

function checkbox_verify(index){
    tasks[index].completed = !tasks[index].completed
    TasksList()
}

function click_btn(){
    add_task()
}

function del_task(index){
    tasks.splice(index, 1);
    console.log(tasks)
    TasksList()
}

function add_task(){
    const input_text = document.querySelector('#input-text')
    const element = input_text.value

    if(element){
        if(element == '') return
        tasks.push({text: element, completed: false})
        input_text.value = ''
        TasksList() 
    }else{
        alert('Insira uma Tarefa')
    }

    console.log(tasks)
}
