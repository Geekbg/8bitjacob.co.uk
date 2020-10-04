let screenWidth = window.innerWidth;
let faceWidth = document.getElementByClass("face").innerWidth;

function setHeader() {
	let halfWidth = (((screenWidth - faceWidth)/2)/screenWidth)*100;
	document.getElementByClass("ini8").style.width = halfWidth%;
	document.getElementByClass("iniJ").style.width = halfWidth%;
	window.requestAnimationFrame(setHeader);
};

setHeader();