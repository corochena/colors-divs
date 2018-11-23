
    var COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure",
    "Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
    "CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson",
    "Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen",
    "DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed",
    "DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
    "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray",
    "DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro",
    "GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow","HoneyDew",
    "HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
    "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
    "LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen",
    "LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow",
    "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue",
    "MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
    "MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
    "Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed",
    "Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip",
    "PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue",
    "SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver",
    "SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue",
    "Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
    "Yellow","YellowGreen"];

    "use strict";
    var timer;
    var start = 0;
    var nBoxes = 10;
    var margin = 60;
    var W = document.body.clientWidth - 2 * margin;
    var H = document.body.clientHeight - 2 * margin;
    var gap = H / nBoxes / 2;
    
    function setTimer() {
      timer = setInterval(display, 1000);
    }

    function display() {
      for (i=0; i<nBoxes; i++) {
//        var randomColor = getColor();
        var index = (i+start) % COLOR_NAMES.length;
        var color = COLOR_NAMES[index];
        createBox(i, color);
      }
      start++;
    }
      
    function createBox(i, color) {
        var theBody = document.getElementById("main");
        divNode = document.createElement("div");
        divNode.style.backgroundColor = color;
        divNode.style.top = margin + gap * i;
        divNode.style.left = margin + gap * i;
        divNode.style.width = W - 2 * gap * i;
        divNode.style.height = H - 2 * gap * i;
        divNode.style.textAlign = "center";
        divNode.style.borderStyle = "solid";
        divNode.style.borderWidth = "1px";
        divNode.style.fontSize = 13;
        textNode = document.createTextNode(color);
        divNode.appendChild(textNode);
        theBody.appendChild(divNode);
    }

window.onload = setTimer;