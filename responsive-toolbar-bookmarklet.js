javascript:(function(){
     var bodyTag = document.getElementsByTagName("body")[0];
    
    createToolbar = function(){
         var Tb = {
            width    : window.innerWidth,
            height   : window.innerHeight,
            innerDiv : document.createElement("div"),
            outerDiv : document.createElement("div")
        };
        
        Tb.innerDiv.id = "responsive-toolbar";    
        Tb.outerDiv.id = "responsive-toolbar-wrapper";

        Tb.outerDiv.style.width        = "100%";
        Tb.outerDiv.style.zIndex      = "9999";
        Tb.outerDiv.style.top          = "0";
        Tb.outerDiv.style.left         = "0";
        Tb.outerDiv.style.position     = "fixed";	
        Tb.outerDiv.style.height       = "20px";
        Tb.outerDiv.style.background   = "#4f8ece";
        Tb.outerDiv.style.borderBottom = "1px solid black";
        Tb.outerDiv.style.overflow     = "hidden";
 
        Tb.innerDiv.style.height     = "20px";
        Tb.innerDiv.style.lineHeight = "20px";
        Tb.innerDiv.style.color      = "#234b74";
        Tb.innerDiv.style.fontFamily = "sans-serif";
        Tb.innerDiv.style.fontSize   = "12px";
        Tb.innerDiv.style.fontWeight = "bold";
        Tb.innerDiv.style.textShadow = "0px 1px 1px #acd5ff";
        Tb.innerDiv.style.textAlign  = "center";

        return Tb;
    };
    
    
    deviceDescription = function( Tb ){
        var width = Tb.width;
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
    };   

    removeToolBar = function() {
        element = document.getElementById( "responsive-toolbar-wrapper" );
        element.parentNode.removeChild( element );
        return false;	
    };

   insertToolbar = function() {
      
        bodyTag.insertBefore( instance.outerDiv, bodyTag.firstChild );
        instance.outerDiv.appendChild( instance.innerDiv );
    };

    toolbarContent = function() {
        var Tb = instance;
        Tb.innerDiv.innerHTML =  "";  
        Tb.innerDiv.innerHTML += Tb.width + " x " + Tb.height + "  ";
        Tb.innerDiv.innerHTML += deviceDescription(Tb);
        Tb.innerDiv.innerHTML += " <a href=\"#\" style=\"color:#234b74\x3Bfont-weight:normal\x3Btext-shadow:none\" onclick=\"removeToolBar()\x3B\" > [remove]</a>";
    };

    var instance = createToolbar();

    deviceDescription(instance);

    toolbarContent();

    insertToolbar();    

    window.onresize = function(){
        var Tb = instance;
        Tb.width = window.innerWidth;
        Tb.height = window.innerHeight;
        toolbarContent();
    } 
})();  
