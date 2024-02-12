// JavaScript code

// Function to toggle the visibility of the search bar
function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show");
}

// Function to handle search functionality
function searchFunction() {
    // Get the input value
    var input = document.getElementById("searchInput").value;
    // Perform search operation (e.g., fetch search results from a database)
    // Display search results
    alert("Search for: " + input);
}

// Function to handle navigation menu dropdown
function toggleMenu() {
    var menuDropdown = document.getElementById("menuDropdown");
    menuDropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
