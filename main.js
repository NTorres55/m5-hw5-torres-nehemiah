// User hovers over one of the boxes
var listItem = document.getElementsByClassName("box");

function mouseEnter() {
  this.style.backgroundColor = "white";
}
function mouseLeave() {
  this.style.backgroundColor = "red";
}

for (i=0; i<listItem.length; i++) {
  listItem[i].addEventListener("mouseenter", mouseEnter);
  listItem[i].addEventListener("mouseleave", mouseLeave);
}

// Click on box 1 message
document.getElementById("box-1").addEventListener("click",
		function() {
			alert("Oooh - so close, but no cigar");
		}, false
);

// Click on box 2 message
document.getElementById("box-2").addEventListener("click",
		function() {
			alert("DING DING DING - We have a winner");
		}, false
);

// Click on box 3 message
document.getElementById("box-3").addEventListener("click",
		function() {
			alert("Ooops, butter luck next time");
		}, false
);

// click any box and get href to appear
var a = document.createElement("button");
var linkText = document.createTextNode("Start Over");

a.appendChild(linkText);
a.title = "my title text";
a.href = "#";
document.body.appendChild(a);

document.getElementsByClassName("box").addEventListener("click",
	function() {
		document.getElementById("boxes").appendChild(a);
	})
