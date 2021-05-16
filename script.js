const myForm = document.getElementById("myForm");
const myList = document.getElementById("myList");
const taskInput = document.getElementById("taskInput");
const myClearButton = document.getElementById("myClearButton");


myClearButton.addEventListener("click", function() {
    myList.innerHTML = "";
});

myForm.onsubmit = function(event) {
    event.preventDefault();

    var newListItem = document.createElement("li");
    newListItem.innerHTML = taskInput.value;

    var newListItemCheckbox = document.createElement("input");
    newListItemCheckbox.setAttribute("type", "checkbox");
    newListItem.appendChild(newListItemCheckbox);
    newListItemCheckbox.addEventListener("change", function(){
        console.log(this);
        if(this.checked){
            this.parentNode.style.background = "yellow";
        } else {
            this.parentNode.style.background = "white";
        }
    })


    var newListItemButton = document.createElement("button");
    newListItemButton.innerHTML = "Delete";
    newListItem.appendChild(newListItemButton);

    newListItemButton.addEventListener("click", function(){
        console.log(this);
        this.parentNode.remove();
    });

    
    myList.appendChild(newListItem);

    taskInput.value = "";

}
