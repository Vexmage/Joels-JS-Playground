// List Creation using jQuery

$(document).ready(function() {
    // Using let or const instead of var for block-scoping
    const listItems = ["Item 1", "Item 2", "Item 3"];
    const ul = $('<ul></ul>').appendTo('body');

    // Using modern for loop instead of $.each
    for (let index in listItems) {
        const value = listItems[index];
        ul.append(`<li>${value}</li>`);
    }

    // Event delegation for dynamically created elements
    $(document).on('click', '#addItemBtn', function() {
        const newItem = $('#itemInput').val();
        if (newItem.trim() !== "") {
            ul.append(`<li>${newItem}</li>`);
            $('#itemInput').val("");
        } else {
            // Using modern alert method
            alert("Input cannot be empty!");
        }
    });

    // Event delegation for dynamically created elements
    $(document).on('click', 'li', function() {
        $(this).remove();
    });

    // Removing the deprecated $.browser check
    // Using feature detection for Internet Explorer version 11 and below
    if (window.navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
        alert("You are using Internet Explorer");
    }
});
