//Global Variables
const taskInput = document.getElementById("new-task");       // add new task -- text input
const addButton = document.getElementById("addButton");      // add task button
const taskList = document.getElementById("task-list");       // ul list of tasks(li)


// Create new task list item container
const createNewTaskElement = (taskString) => {
	let listItem = document.createElement("li");                        // list item 
    let label = document.createElement("label");                        // label
    let checkBox = document.createElement("input");                     // checkbox
    let span = document.createElement("span");                          // blank span for checkbox
    let div = document.createElement("div");                            // div for taskinput
    let taskName = document.createElement("input");                      // text
	let editButton = document.createElement("button");                  // edit button
	let deleteButton = document.createElement("button");                // delete button

    taskName.value = taskString;   // set taskName to textinput value
    taskName.setAttribute("disabled", true);
    listItem.className = "task";
    checkBox.type = "checkbox";
    checkBox.className = "filled-in";
    div.className = "input-field inline";
	editButton.innerHTML = "<i class="+"material-icons"+">edit</i>"; 
	editButton.className = "edit btn-small btn-flat waves-effect";
	deleteButton.innerHTML = "<i class="+"material-icons"+">clear</i>"; 
    deleteButton.className = "delete btn-small btn-flat waves-effect";
    //deleteButton.onclick = deleteTask();

	// append label to listItem --- with elements appended inside the label
	listItem.appendChild(label);
	label.appendChild(checkBox);
    label.appendChild(span);
    listItem.appendChild(div);
    div.appendChild(taskName);
    listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

// Create new list item with text from input and bind events(edit/ delete) :
const addTask = () => {
    let listItem = createNewTaskElement(taskInput.value);
    if (listItem != "") {
        taskList.appendChild(listItem); // append listItem to taskList
        taskInput.value = "";           // clear text input

        //cycle over taskList ul list items --- for each list item
        for (let i = 0; i < taskList.children.length; i++) {
            bindTaskEvents(taskList.children[i]);   //bind events to list items chldren
        }
    }
}



// Edit an existing task.
// var editTask=function(){
// console.log("Edit Task...");
// console.log("Change 'edit' to 'save'");

// var listItem=this.parentNode;

// var editInput=listItem.querySelector('input[type=text]');
// var label=listItem.querySelector("label");
// var containsClass=listItem.classList.contains("editMode");
// 		//If class of the parent is .editmode
// 		if(containsClass){

// 		//switch to .editmode
// 		//label becomes the inputs value.
// 			label.innerText=editInput.value;
// 		}else{
// 			editInput.value=label.innerText;
// 		}

// 		//toggle .editmode on the parent.
// 		listItem.classList.toggle("editMode");
// }


//Delete task -- select element parentnode and remove child
const deleteTask = (e) => {
    var elem = document.querySelector('.task');
    console.log(elem);
    elem.parentNode.removeChild(elem);
}


//Mark task completed
// var taskCompleted=function(){
// 		console.log("Complete Task...");
	
// 	//Append the task list item to the #completed-tasks
// 	var listItem=this.parentNode;
// 	completedTasksHolder.appendChild(listItem);
// 				bindTaskEvents(listItem, taskIncomplete);

// }

// var taskIncomplete=function(){
// 		console.log("Incomplete Task...");
// //Mark task as incomplete.
// 	//When the checkbox is unchecked
// 		//Append the task list item to the #incomplete-tasks.
// 		var listItem=this.parentNode;
// 	taskList.appendChild(listItem);
// 			bindTaskEvents(listItem,taskCompleted);
// }


// Set the click handler to the addTask function.
addButton.addEventListener("click", addTask);

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

			//Bind editTask to edit button.
			//editButton.onclick=editTask;
			//Bind deleteTask to delete button.
            deleteButton.onclick = deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			//checkBox.onchange=checkBoxEventHandler;
}



//cycle over completedTasksHolder ul list items
	// for (var i=0; i<completedTasksHolder.children.length;i++){
	// //bind events to list items chldren(tasksIncompleted)
	// 	bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	// }

