document.querySelector(".nav-toggle").addEventListener("click", e => {
	e.preventDefault();
	document.querySelector("html").classList.toggle("openNav");
	e.classList.toggle("active");
});
