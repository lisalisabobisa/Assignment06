// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function init() {
    "use strict"
    let btnAddEmployee = window.document.getElementById("btnAddEmployee");
    btnAddEmployee.addEventListener("click", function() {
        window.open("add-employee.html", "btnAddEmployee", "width=800, height=700");
    });
    
}
