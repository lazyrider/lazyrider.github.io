var link = document.querySelector(".address-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay-js")



link.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (!popup.classList.contains("modal-show-js")) {
		popup.classList.add("modal-show-js");
		}

	if (!overlay.classList.contains("modal-overlay-js-on")) {
		overlay.classList.add("modal-overlay-js-on");
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (popup.classList.contains("modal-show-js")) {
		popup.classList.remove("modal-show-js");
		overlay.classList.remove("modal-overlay-js-on");
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show-js")) {
			popup.classList.remove("modal-show-js");
			overlay.classList.remove("modal-overlay-js-on");
		}
	}
});

overlay.addEventListener("click", function() {
	if (popup.classList.contains("modal-show-js") || overlay.classList.contains("modal-overlay-js-on")) {
	popup.classList.remove("modal-show-js");
	overlay.classList.remove("modal-overlay-js-on");
	}
});