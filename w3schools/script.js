filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements, that are not selected
    for (i = 0; i < x.length; i++) {
        portRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) portAddClass(x[i], "show");
    }
}

// Show filtered elements
function portAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elemets that are not selected
function portRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
}