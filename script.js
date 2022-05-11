const hamburger = document.getElementById("hamburger");
const close_hamburger = document.getElementById("close-hamburger");
const nav_right = document.getElementById("nav-right");
const nav_list = document.getElementById("nav-list");
const header = document.querySelector("header");
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("button-login");
const closeModal = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("BODY")[0];

window.addEventListener("scroll", function () {
	scrollPosition = window.scrollY;
	if (scrollPosition <= 60 && !nav_list.classList.contains("show")) {
		header.classList.remove("bg-white-shadow");
	} else {
		header.classList.add("bg-white-shadow");
	}
});
hamburger.addEventListener("click", () => {
	header.classList.add("bg-white-shadow");
	nav_list.classList.toggle("show");
	close_hamburger.classList.toggle("show");
	hamburger.classList.toggle("show");
});
close_hamburger.addEventListener("click", () => {
	scrollPosition = window.scrollY;
	if (scrollPosition <= 60) header.classList.toggle("bg-white-shadow");
	nav_list.classList.toggle("show");
	hamburger.classList.toggle("show");
	close_hamburger.classList.toggle("show");
});

function changeDivisionFilter(division) {
	const btnPemda = document.getElementById("btn-pemda");
	const btnOrgan = document.getElementById("btn-organ");
	const btnAdvo = document.getElementById("btn-advo");
	const btnKesek = document.getElementById("btn-kesek");

	const pemda = document.getElementById("pemda");
	const organ = document.getElementById("organ");
	const advo = document.getElementById("advo");
	const kesek = document.getElementById("kesek");

	kesek.classList.add("hide");
	pemda.classList.add("hide");
	advo.classList.add("hide");
	organ.classList.add("hide");

	btnPemda.classList.remove("active");
	btnOrgan.classList.remove("active");
	btnAdvo.classList.remove("active");
	btnKesek.classList.remove("active");

	const btn = document.getElementById("btn-" + division);
	const filter = document.getElementById(division);

	btn.classList.add("active");
	filter.classList.remove("hide");
}
