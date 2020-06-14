var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var toDoList = document.getElementById("toDoList");

function inputLength() {
    return input.value.length;
}

// Determine number of list child elements

function findListItemCount() {
    listItemCount = document.getElementById("toDoList").childElementCount;
    console.log(listItemCount);
}


function listManager() {

    // Add list item if input value detected

    if (inputLength() > 0) {
        findListItemCount();

        // Create base list element section w/ default content
        var addListItem = document.createElement("section");
        addListItem.setAttribute("id", "listItem" + listItemCount);

        var defaultItemContent = '<p>' + input.value + '</p><button  class="removeButton" onclick="myFunction(event)" id="remove-' + listItemCount + '"><i class="fas fa-minus-circle"></i></button>';

        // var defaultItemContent = '<p>' + input.value + '</p><i class="fas fa-minus-circle"></i>';


        //Inject user input into list item
        addListItem.innerHTML = defaultItemContent;

        //Append list item w/content to the to do list
        toDoList.appendChild(addListItem);
        input.value = '';


    }



}


// Add new list item on button click 

function addListAfterClick() {
    if (inputLength() > 0) {
        listManager()
    }
}

// Add new list item on "enter" keypress

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        listManager()

    }
}


// Remove list item

function myFunction(event) {


    if (event.target.nodeName === "I") {

        event.target.parentElement.parentElement.remove();

    } else {
        event.target.parentElement.remove();
    }

}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);