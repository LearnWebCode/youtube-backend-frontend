// Initial page load - If someone visits a URL directly instead of clicking our links/buttons
const startingLocation = window.location.pathname

if (startingLocation == "/") renderHome()
if (startingLocation == "/about") renderAbout()
if (startingLocation == "/contact") renderContact()

// If someone clicks our buttons/links
document.querySelector("#home").addEventListener("click", function () {
  history.pushState({ page: "home" }, null, "/")
  renderHome()
})

document.querySelector("#about").addEventListener("click", function () {
  history.pushState({ page: "about" }, null, "about")
  renderAbout()
})

document.querySelector("#contact").addEventListener("click", function () {
  history.pushState({ page: "contact" }, null, "contact")
  renderContact()
})

// When someone uses the browser back/forward buttons
window.onpopstate = function (event) {
  if (event.state.page == "home") renderHome()
  if (event.state.page == "about") renderAbout()
  if (event.state.page == "contact") renderContact()
}

// The actual functions that modify the DOM
function renderHome() {
  document.querySelector("#content").innerHTML = `
  <h2>Homepage</h2>
  <p>This is the homepage. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `
}

function renderAbout() {
  document.querySelector("#content").innerHTML = `
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `
}

function renderContact() {
  document.querySelector("#content").innerHTML = `
  <h2>Contact Page</h2>
  <p>The contact page content will live here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `
}
