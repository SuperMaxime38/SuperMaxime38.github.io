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
    document.getElementById(toDisplay).style.height = "100%";
    document.getElementById(toDisplay).style.display = "flex";
    isDescOpen = true;
    opened = toDisplay;

}


function hide() {
    if(!desc_child_clicked){
        // Set the height of the popup to 0 (invisible)
        document.getElementById(opened).style.height = "0";
        document.getElementById(opened).style.display = "none";
        isDescOpen = false;
        opened = "";
    } else {
        desc_child_clicked = false;
    }
  
}

// Escpace key close desc popup
window.addEventListener("keydown", function (evt) {

    if (isDescOpen && evt.keyCode == 27) hide();
}
);