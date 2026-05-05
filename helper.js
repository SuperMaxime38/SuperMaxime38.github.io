// function display(toDisplay) {
//     let selection = document.getElementById(toDisplay);
//     selection.style.display = "block";
// }

// var desc_child_clicked = false; // declare the variable that tracks the state
// function desc_child_handler(){ // declare a function that updates the state
//   desc_child_clicked = true;
// }

// var desc_child = document.getElementById('desc_child'); // grab a reference to your element
// desc_child.addEventListener('click', desc_child_handler);

// function hide(toHide) {
//     let selection = document.getElementById(toHide);

//     if(!desc_child_clicked){
//         selection.style.display = "none";
//     }
    
//     desc_child_clicked = false;
// }


var desc_child_clicked = false; // declare the variable that tracks the state
function desc_child_handler(){ // declare a function that updates the state
  desc_child_clicked = true;
}

var desc_child = document.getElementById('desc_child'); // grab a reference to your element
desc_child.addEventListener('click', desc_child_handler);

// LOGIN POPUP
let isDescOpen = false;
opened = "";

function display(toDisplay) {
    if(opened != "") {
        hide();
    }
    // Set the height of the popup to 800px
    document.getElementById(toDisplay).style.height = "100%";
    // Display the navigation bar
    document.getElementById(toDisplay).style.display = "block";
    isDescOpen = true;
    opened = toDisplay;

}


function hide() {
    if(!desc_child_clicked){
        // Set the height of the popup to 0
        document.getElementById(opened).style.height = "0";
        // Hide the navigation bar
        document.getElementById(opened).style.display = "none";
        isDescOpen = false;
        opened = "";
    } else {
        desc_child_clicked = false;
    }
  
}
