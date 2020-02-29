const yturl = "https://www.youtube.com/results?search_query=";

var input = document.getElementById("input");
var button = document.getElementById("button");

// Put cursor in input box
input.focus();

// Handle keydown events on the input box
input.onkeydown = function(keyboardEvent) {
    // Execute button click on "Enter" pressed
    if (keyboardEvent.key === "Enter") {
        button.click();
    }
}

// Handle button clicks
button.onclick = function() {
    // Get user's input text
    var inputText = input.value.trim();

    // Open a new tab and navigate to the YouTube search results for the user's text
    browser.tabs.create({
        url: yturl + encodeURIComponent(inputText)
    } /* createProperties object */);

    window.close(); // hide the popup
}
