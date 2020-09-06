const header = document.getElementById("my_header");
const nav_bar = document.getElementById("nav_bar");
const header_txt = document.getElementById("name");
const vl = document.getElementsByClassName("vl");
let sticky = header.offsetTop;

const scrolling_func = () => {
	if (window.pageYOffset > sticky) {
		header.classList.add("green", "sticky");
		nav_bar.classList.add("white_txt");
		header_txt.classList.add("white_txt");
		for (element of vl) {
			element.classList.add("new_border");
		}
	} else {
		header.classList.remove("green", "sticky")
		nav_bar.classList.remove("white_txt");
		header_txt.classList.remove("white_txt");
		for (element of vl) {
			element.classList.remove("new_border");
		}
	}
}

window.onscroll = function() {scrolling_func()};