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

var chatbtp_desc_child = document.getElementById('chatbtp_desc_child');
chatbtp_desc_child.addEventListener('click', desc_child_handler);

var s1_04_desc_child = document.getElementById('s1_04_desc_child');
s1_04_desc_child.addEventListener('click', desc_child_handler);

var youtoube_desc_child = document.getElementById('youtoube_desc_child');
youtoube_desc_child.addEventListener('click', desc_child_handler);

var a_mazing_game_desc_child = document.getElementById('a_mazing_game_desc_child');
a_mazing_game_desc_child.addEventListener('click', desc_child_handler);

var video_to_ascii_desc_child = document.getElementById('video_to_ascii_desc_child');
video_to_ascii_desc_child.addEventListener('click', desc_child_handler);

var mctdl_desc_child = document.getElementById('mctdl_desc_child');
mctdl_desc_child.addEventListener('click', desc_child_handler);



// LOGIN POPUP
let isDescOpen = false;
opened = "";

function display(toDisplay) {
    // Set the height of the popup to 800px
    document.getElementById(toDisplay).style.height = "100%";
    document.getElementById(toDisplay).style.display = "flex";
    isDescOpen = true;
    opened = toDisplay;

}


function hide() {
    if(!desc_child_clicked){
        // Set the height of the popup to 0
        document.getElementById(opened).style.height = "0";
        document.getElementById(opened).style.display = "none";
        isDescOpen = false;
        opened = "";
    } else {
        desc_child_clicked = false;
    }
  
}
