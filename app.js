window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value.trim();

        if(!task){
            alert("Blank entry, Please enter something!");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        const input_checkbox_el = document.createElement("input");
        input_checkbox_el.classList.add("checkbox")
        input_checkbox_el.type="checkbox";

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.textContent="EDIT";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.textContent="DELETE"

        list_el.appendChild(task_el);
        task_el.appendChild(task_content_el);
        task_content_el.appendChild(input_checkbox_el);
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_action_el);
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        input.value = "";
        
        

        input_checkbox_el.addEventListener('click',()=>{
            if(input_checkbox_el.checked){
                task_input_el.style.textDecoration="line-through";
                
            }else{
                task_input_el.style.textDecoration="none";
                
            }
        })

        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);
            
        });

        task_edit_el.addEventListener('click',()=>{
            if(task_edit_el.textContent.toLowerCase()=="edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.textContent="SAVE"
                
            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.textContent="EDIT"
                
            }
        });
    });
    
    
});
