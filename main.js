function addNewTask() {
    var list = document.getElementById("List");
    var text = document.getElementById("task_name").value;
    if(text.length === 0) {
        alert('Your task needs to present at least one caracter');
        return;
    }
    var listItem = document.createElement("li");
    listItem.className= "list-item";
    
    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement)
    list.appendChild(listItem)
}
