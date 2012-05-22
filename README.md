**About:**

Responsive Toolbar is a (currently) small piece of pure JavaScript that displays the 
current window size, and what devices are associated with that size on an overlay on the
top of the page.

[bookmark test]((function(){var a=document.getElementsByTagName("body")[0];createToolbar=function(){var a={width:window.innerWidth,height:window.innerHeight,innerDiv:document.createElement("div"),outerDiv:document.createElement("div")};a.innerDiv.id="responsive-toolbar";a.outerDiv.id="responsive-toolbar-wrapper";a.outerDiv.style.width="100%";a.outerDiv.style.zIndex="9999";a.outerDiv.style.top="0";a.outerDiv.style.left="0";a.outerDiv.style.position="fixed";a.outerDiv.style.height="20px";a.outerDiv.style.background="#4f8ece";a.outerDiv.style.borderBottom="1px solid black";a.outerDiv.style.overflow="hidden";a.innerDiv.style.height="20px";a.innerDiv.style.lineHeight="20px";a.innerDiv.style.color="#234b74";a.innerDiv.style.fontFamily="sans-serif";a.innerDiv.style.fontSize="12px";a.innerDiv.style.fontWeight="bold";a.innerDiv.style.textShadow="0px 1px 1px #acd5ff";a.innerDiv.style.textAlign="center";return a};deviceDescription=function(a){var b=a.width;if(b>0&&b<=480){return"Landscape phone and smaller"}else if(b>480&&b<=767){return"Landscape phone to portrait tablet"}else if(b>767&&b<979){return"Portrait tablet to landscape tablet, and desktop"}else if(b>980&&b<1199){return"Desktop"}else{return"Large desktop"}};removeToolBar=function(){element=document.getElementById("responsive-toolbar-wrapper");element.parentNode.removeChild(element);return false};insertToolbar=function(){a.insertBefore(b.outerDiv,a.firstChild);b.outerDiv.appendChild(b.innerDiv)};toolbarContent=function(){var a=b;a.innerDiv.innerHTML="";a.innerDiv.innerHTML+=a.width+" x "+a.height+"  ";a.innerDiv.innerHTML+=deviceDescription(a);a.innerDiv.innerHTML+=' <a href="#" style="color:#234b74;font-weight:normal;text-shadow:none" onclick="removeToolBar();" > [remove]</a>'};var b=createToolbar();deviceDescription(b);toolbarContent();insertToolbar();window.onresize=function(){var a=b;a.width=window.innerWidth;a.height=window.innerHeight;toolbarContent()}})())
The Toolbar currently displays the size of the browser, and the devices that support that size.

I am open to suggestions for anything else that would be helpful.

This is in VERY EARLY STAGES of development.

**Working Demo:**

http://tommywolber.com/dev/Responsive-Toolbar/demo.html

**Usage:**

Just add the JS file to your HTML:
```html
<script src="responsive_toolbar.js"></script>
```

