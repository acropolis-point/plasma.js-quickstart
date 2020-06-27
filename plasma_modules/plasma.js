/*
	PlasmaJS by Acropolis Point
*/
//----------------------------------

var metadata = document.querySelector("head");
var styles = document.querySelector("style");
window.onload = function start() {
	metadata.innerHTML += 
	`<style>
	</style>`;
	document.body.innerHTML += `<!-- Plasma.JS Scripts are running. -->`
}
function newExternalFileRequest(filetype, url) {
	if (typeof filetype === "string" && typeof url === "string") {
		if (filetype === "css") {
			metadata.innerHTML += `<link rel = "stylesheet" href = "` + url + `" type = "text/css"/>`;
		} else if (filetype === "js") {
			metadata.innerHTML += `<script src = "` + url + `" type = "text/javascript"></script>`;
		} else {
			alert("LogicError: " + filetype + " is not a valid filetype.");
		}
	}
}
function cssTag(tagName, tagStyles) {
	styles.textContent += tagName+` { `+tagStyles+` }`;
}
function cssClass(className, classStyles) {
	// Classes are reusable.
	styles.textContent += `.`+className+` { `+classStyles+` }`;
}
function cssId(idTitle, idStyles) {
	// Do not repeat IDs.
	styles.textContent += `#`+idTitle+` { `+idStyles+` }`;
}
function setTitle(appTitle) {
	metadata.innerHTML += `<title>`+appTitle+`</title>`;
}
function button(value, command, cssClass, cssId) {
	// Creates an html <button></button> tag.
	document.body.innerHTML += `<button class = "`+cssClass+`" id = "`+cssId+`" onclick = "`+command+`()">`+value+`</button>`;
}
function text(text, cssClass, cssId) {
	document.body.innerHTML += `<p class = "`+cssClass+`" id = "`+cssId+`">`+text+`</p>`;
}