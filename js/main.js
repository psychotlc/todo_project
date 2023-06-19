

function Add_new_task(){
    var input = document.getElementById("input_place");
    var value = input.value;
    value = value.trim();
    value = value.replace(/\s+$/g, "");
    input.value = "";
    if (value.length == 0) return alert("The field is empty");
    

    var Task_Desc = document.createElement("span");
    Task_Desc.className = "task";
    Task_Desc.textContent = value;

    var Remove_Image = document.createElement("img");
    Remove_Image.src="images/remove.png";
    Remove_Image.alt="remove";
    Remove_Image.className = "remove_task_png";
    
    var NewTask = document.createElement("div");
    NewTask.className = "tasks";
    NewTask.appendChild(Task_Desc);
    NewTask.appendChild(Remove_Image);
    
    var TodoPlace = document.getElementById("Todo_Place");
    TodoPlace.appendChild(NewTask);
    Check_Remove_click();
}

function Check_Remove_click(){
    var blocks = document.getElementsByClassName("tasks");

    for (var i = 0; i < blocks.length; i++){
        var delete_button = blocks[i].getElementsByClassName("remove_task_png")[0];
        delete_button.addEventListener("click", function Remove_task(){
            var block = this.parentNode;
            block.remove();
        });
    }

}