function display(toDisplay) {
    let selection = document.getElementById(toDisplay);
    selection.style.display = "block";
}

var desc_child_clicked = false; // declare the variable that tracks the state
function desc_child_handler(){ // declare a function that updates the state
  desc_child_clicked = true;
}

var desc_child = document.getElementById('desc_child'); // grab a reference to your element
desc_child.addEventListener('click', desc_child_handler);

function hide(toHide) {
    let selection = document.getElementById(toHide);

    if(!desc_child_clicked){
        selection.style.display = "none";
    }
    
    desc_child_clicked = false;
}