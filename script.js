var animationSpeed = 400;


function words2Faces(userText) {
  var userTextL = userText.toLowerCase();
  //strip punctuation
  var punc = /[ï¿½`~\"\/'_\-[\]{}()*+!?%&.,\\^$|#@<>|+=;:\u2018\u2019\u201C\u201D]/g;
  var noPunc = userTextL.replace(punc,"");
  var words = noPunc.split("");

  //remove all spaces
  for (var i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      words.splice(i, 1);
    } else if (words.indexOf(words[i]) == words.length) {
      return false;
    }
  }

  var allofEm = words;

  //replace all phonemes with their class names
  for (var i = 0; i < allofEm.length; i++) {
    if (allofEm[i] == "a") {
      allofEm[i] = "asl-a";
    } else if (allofEm[i] == "b") {
      allofEm[i] = "asl-b";
    } else if (allofEm[i] == "c") {
      allofEm[i] = "asl-c";
    } else if (allofEm[i] == "d") {
      allofEm[i] = "asl-d";
    } else if (allofEm[i] == "e") {
      allofEm[i] = "asl-e";
    } else if (allofEm[i] == "f") {
      allofEm[i] = "asl-f";
    } else if (allofEm[i] == "g") {
      allofEm[i] = "asl-g";
    } else if (allofEm[i] == "h") {
      allofEm[i] = "asl-h";
    } else if (allofEm[i] == "i") {
      allofEm[i] = "asl-i";
    } else if (allofEm[i] == "j") {
      allofEm[i] = "asl-j";
    } else if (allofEm[i] == "k") {
      allofEm[i] = "asl-k";
    } else if (allofEm[i] == "l") {
      allofEm[i] = "asl-l";
    } else if (allofEm[i] == "m") {
      allofEm[i] = "asl-m";
    } else if (allofEm[i] == "n") {
      allofEm[i] = "asl-n";
    } else if (allofEm[i] == "o") {
      allofEm[i] = "asl-o";
    } else if (allofEm[i] == "p") {
      allofEm[i] = "asl-p";
    } else if (allofEm[i] == "q") {
      allofEm[i] = "asl-q";
    } else if (allofEm[i] == "r") {
      allofEm[i] = "asl-r";
    } else if (allofEm[i] == "s") {
      allofEm[i] = "asl-s";
    } else if (allofEm[i] == "t") {
      allofEm[i] = "asl-t";
    } else if (allofEm[i] == "u") {
      allofEm[i] = "asl-u";
    } else if (allofEm[i] == "v") {
      allofEm[i] = "asl-v";
    } else if (allofEm[i] == "w") {
      allofEm[i] = "asl-w";
    } else if (allofEm[i] == "x") {
      allofEm[i] = "asl-x";
    } else if (allofEm[i] == "y") {
      allofEm[i] = "asl-y";
    } else if (allofEm[i] == "z") {
      allofEm[i] = "asl-z";
    }
  }



  return allofEm;
} //END

var userInput = document.getElementById("what2Say").value;

var classArray = [];


function loopEm(putMeHere) {
  classArray = [];
  var userText2 = document.getElementById("what2Say").value;
  classArray = words2Faces(userText2);
  var cal = classArray.length;
  var classChanges = 0;
  (function nextClass() {
    setTimeout(function() {
      if (classChanges != 0) {
        classArray.push(classArray.shift());
      }
      var c = document.getElementById(putMeHere);
      c.className = "asl";
      c.classList.add(classArray[0]);
      //increments the variable
      classChanges++;
      if (classChanges < classArray.length + 1) {
        nextClass();
      } else {
        c.className = "";
        c.classList.add("asl");
        c.classList.add(classArray[classArray.length-1]);//stay on last letter
        return false;
      }
    }, animationSpeed); // delay
  })(); 
  
  document.getElementById("spelledOut").innerHTML="";
  
  //create boxes in the side area
  for (var i=0;i<classArray.length;i++){
    if(classArray[i]==="asl-u"||classArray[i]==="asl-w"||classArray[i]==="asl-r"||classArray[i]==="asl-k"||classArray[i]==="asl-z"||classArray[i]==="asl-v"||classArray[i]==="asl-b"||classArray[i]==="asl-f"||classArray[i]==="asl-d"){
      document.getElementById("spelledOut").innerHTML += "<span class='asl3 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
    }else if(classArray[i]==="asl-g"||classArray[i]==="asl-h"){
      document.getElementById("spelledOut").innerHTML += "<span class='asl4 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
    }else{
    document.getElementById("spelledOut").innerHTML += "<span class='asl2 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
  }
}
}

function aslContainer() {
  loopEm("aslContainer");
}
document.getElementById("aslContainer").addEventListener("click", aslContainer);
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
  if (e.keyCode == 13) {
    loopEm("aslContainer");
  }
}