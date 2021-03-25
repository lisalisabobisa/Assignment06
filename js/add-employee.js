// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);
function init() {
    "use strict"
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (id) => {
        return document.getElementById(id);
    };

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    let cancel = window.document.getElementById("cancel");
    cancel.addEventListener("click", function() {
        window.close();
    });
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    let submit = window.document.getElementById("submit");
    submit.addEventListener("click", (e) => {
        e.preventDefault();

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    let id = window.document.getElementById("id").value;
    let name = window.document.getElementById("name").value;
    let ext = window.document.getElementById("extension").value;
    let email = window.document.getElementById("email").value;
    let dept = window.document.getElementById("department").value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    let output = window.opener.document.getElementById("loginDetails");
    
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    output.innerHTML = "<br><br>ID: " + id + "<br>Name: " + name + "<br>Extension: " + ext + "<br>Email: " + email + "<br>Department: " + dept;
// CLOSE THE POPUP
    window.close();
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

    });

}

