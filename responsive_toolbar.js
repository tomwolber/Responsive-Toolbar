function createInfoBox(){
    this.Base = {
        width          : window.innerWidth,
        height         : window.innerHeight,
        bodyTag        : document.getElementsByTagName("body")[0],
        boxWrapper     : document.createElement("div"),
        box            : document.createElement("div"),
    }

	Base.boxWrapper.id = "responsive-toolbar-wrapper";

    Base.boxWrapper.style.width         = "100%";
    Base.boxWrapper.style.top           = "0";
    Base.boxWrapper.style.left          = "0";
    Base.boxWrapper.style.position      = "absolute";	
    Base.boxWrapper.style.height        = "20px";
    Base.boxWrapper.style.background    = "#4f8ece";
    Base.boxWrapper.style.borderBottom  = "1px solid black";
    Base.boxWrapper.style.overflow      = "hidden";

	Base.box.id = "responsive-toolbar";    
    
	Base.box.style.height      = "20px";
    Base.box.style.lineHeight  = "20px";
    Base.box.style.color       = "#234b74";
    Base.box.style.fontFamily  = "sans-serif";
    Base.box.style.fontSize    = "12px";
    Base.box.style.fontWeight  = "bold";
    Base.box.style.textShadow  = "0px 1px 1px #acd5ff";
    Base.box.style.textAlign   = "center";
}

function deviceDescription(x){
    var width = x.width;
    if ( width > 0 && width <= 480 ) {
        return "Landscape phone and smaller";
    } else if ( width > 480 && width <= 767 ) {
        return "Landscape phone to portrait tablet";
    } else if ( width > 767 && width < 979 ) {
        return "Portrait tablet to landscape tablet, and desktop";      
    } else if ( width > 980 && width < 1199 ) {
        return "Desktop";       
    } else {
        return "Large desktop";
    }
}   

function removeToolBar() {
	element = document.getElementById( "responsive-toolbar-wrapper" );
	element.parentNode.removeChild( element );
	return false;	
}

function infoBoxContent() {
    Base.box.innerHTML =  "";  
    Base.box.innerHTML += Base.width + " x " + Base.height + "  ";
    Base.box.innerHTML += deviceDescription(Base);
    Base.box.innerHTML += " <a href=\"#\" style=\"color:#234b74\x3Bfont-weight:normal\x3Btext-shadow:none\" onclick=\"removeToolBar()\x3B\" > [remove]</a>";         
}

function insertInfoBox() {
    Base.bodyTag.insertBefore( Base.boxWrapper, Base.bodyTag.firstChild );
    Base.boxWrapper.appendChild( Base.box );
}

function buildInfoBox() {
    createInfoBox();
    deviceDescription( Base );
    infoBoxContent();
    insertInfoBox();        
}

buildInfoBox();

window.onresize = function(){
    Base.width = window.innerWidth;
    Base.height = window.innerHeight;
    infoBoxContent();
}
