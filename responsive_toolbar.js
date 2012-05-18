function createInfoBox(){
	this.DeviceSizeBase = {
		width   : window.innerWidth,
		height  : window.innerHeight,
		bodyTag : document.getElementsByTagName("body")[0],
		infoTagWrapper : document.createElement("div"),
		infoTag : document.createElement("div"),
	}

	DeviceSizeBase.infoTagWrapper.style.height = "20px";
	DeviceSizeBase.infoTagWrapper.style.background = "#4f8ece";
	DeviceSizeBase.infoTagWrapper.style.borderBottom = "1px solid black";
	DeviceSizeBase.infoTagWrapper.style.overflow = "hidden";
	DeviceSizeBase.infoTagWrapper.style.width = "100%";
	DeviceSizeBase.infoTagWrapper.style.top = "0";
	DeviceSizeBase.infoTagWrapper.style.left = "0";
	DeviceSizeBase.infoTagWrapper.style.position = "absolute";	
	
	DeviceSizeBase.infoTag.style.height = "20px";
	DeviceSizeBase.infoTag.style.color = "#234b74";
    DeviceSizeBase.infoTag.style.fontFamily = "sans-serif";
	DeviceSizeBase.infoTag.style.fontSize = "12px";
	DeviceSizeBase.infoTag.style.paddingLeft = "10px";
	DeviceSizeBase.infoTag.style.fontWeight = "bold";
	DeviceSizeBase.infoTag.style.borderLeft = "10px solid #a31212";
}

function deviceDescription(x){
	var width = x.width;
	if(width > 0 && width <= 480) {
		return "Landscape phone and smaller";
	} else if(width > 480 && width <= 767) {
		return "Landscape phone to portrait tablet";
	} else if(width > 767 && width < 979) {
		return "Portrait tablet to landscape tablet, and desktop";		
	} else if(width > 980 && width < 1199) {
		return "Desktop";		
	} else {
		return "Large desktop";
	}
}	

function infoBoxContent() {
	DeviceSizeBase.infoTag.innerHTML = "";	
	DeviceSizeBase.infoTag.innerHTML += DeviceSizeBase.width + " x " + DeviceSizeBase.height + "  ";
	DeviceSizeBase.infoTag.innerHTML += deviceDescription(DeviceSizeBase);		
}

function insertInfoBox() {
	DeviceSizeBase.bodyTag.insertBefore(DeviceSizeBase.infoTagWrapper, DeviceSizeBase.bodyTag.firstChild);
	DeviceSizeBase.infoTagWrapper.appendChild(DeviceSizeBase.infoTag);
}

function buildInfoBox() {
	createInfoBox();
	deviceDescription(DeviceSizeBase);
	infoBoxContent();
	insertInfoBox();		
}

buildInfoBox();

window.onresize = function(){
	DeviceSizeBase.width = window.innerWidth;
	DeviceSizeBase.height = window.innerHeight;
	infoBoxContent();
	console.log(deviceDescription(DeviceSizeBase));
}
