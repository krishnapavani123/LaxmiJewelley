document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-c p');
    const currentPage = window.location.pathname.split("/").pop();

    navItems.forEach((item, index) => {
        // Apply underline based on current page
        if ((index === 0 && currentPage === "home.html") || 
            (index === 1 && currentPage === "collections.html") || 
            (index === 2 && currentPage === "contact.html")){
            item.classList.add("active"); // Adds underline effect
        }

        // Handle navigation
        item.addEventListener('click', () => {
            const pageName = item.innerText.toLowerCase() + '.html';
            window.location.href = pageName;
        });
    });
});
document.getElementById("viewMoreBtn").addEventListener("click", function() {
            window.location.href = "stylingproducts.html"; // Redirects to a new page
        });
        document.getElementById("shopnow").addEventListener("click", function() {
            window.location.href = "collections.html"; // Redirects to a new page
        });
       window.onload = function() {
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.getElementsByClassName('closeBtn')[0];

    if (loginBtn && loginModal) {
        loginBtn.onclick = function() {
            loginModal.style.display = "block";
            localStorage.setItem("loginVisible", "true"); // Store state
        };
    }

    if (closeBtn && loginModal) {
        closeBtn.onclick = function() {
            loginModal.style.display = "none";
            localStorage.removeItem("loginVisible"); // Remove state
        };
    }

    if (loginModal) {
        window.onclick = function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = "none";
                localStorage.removeItem("loginVisible");
            }
        };

        // Restore login pop-up state across page reloads
        if (localStorage.getItem("loginVisible") === "true") {
            loginModal.style.display = "block";
        }
    }
};

// Search bar interactions
const searchIcon = document.querySelector(".search-icon");
const popupSearch = document.getElementById("popup-search");
const closeIcon = document.getElementById("close-icon");

if (searchIcon && popupSearch && closeIcon) {
    searchIcon.addEventListener("click", () => {
        popupSearch.classList.add("expanded");
    });

    closeIcon.addEventListener("click", () => {
        popupSearch.classList.remove("expanded");
    });

    document.addEventListener("click", (event) => {
        if (!searchIcon.contains(event.target) && !popupSearch.contains(event.target) && !closeIcon.contains(event.target)) {
            popupSearch.classList.remove("expanded");
        }
    });
}

// Toggle search bar visibility
function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
    }
}
