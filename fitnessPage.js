function Swarmup(input) {
	document.getElementById("S4").innerHTML= round(input * .4);
	document.getElementById("S47").innerHTML= round(input * .47);
	document.getElementById("S5").innerHTML= round(input * .5);
}

function Bwarmup(input) {
	document.getElementById("B4").innerHTML= round(input * .4);
	document.getElementById("B47").innerHTML= round(input * .47);
	document.getElementById("B5").innerHTML= round(input * .5);
}

function Owarmup(input) {
	document.getElementById("O4").innerHTML= round(input * .4);
	document.getElementById("O47").innerHTML= round(input * .47);
	document.getElementById("O5").innerHTML= round(input * .5);
}

function Dwarmup(input) {
	document.getElementById("D4").innerHTML= round(input * .4);
	document.getElementById("D47").innerHTML= round(input * .47);
	document.getElementById("D5").innerHTML= round(input * .5);
}


/*Week 1 Functions*/
function Snumbers(input) {
	document.getElementById("S85").innerHTML= round(input * .85);
	document.getElementById("S75").innerHTML= round(input * .75);
	document.getElementById("S65").innerHTML= round(input * .65);
}

function Bnumbers(input) {
	document.getElementById("B85").innerHTML= round(input * .85);
	document.getElementById("B75").innerHTML= round(input * .75);
	document.getElementById("B65").innerHTML= round(input * .65);
}

function Onumbers(input) {
	document.getElementById("O85").innerHTML= round(input * .85);
	document.getElementById("O75").innerHTML= round(input * .75);
	document.getElementById("O65").innerHTML= round(input * .65);
}

function Dnumbers(input) {
	document.getElementById("D85").innerHTML= round(input * .85);
	document.getElementById("D75").innerHTML= round(input * .75);
	document.getElementById("D65").innerHTML= round(input * .65);
}
/*Week 2 Functions*/
function Snumbers2(input) {
	document.getElementById("S65").innerHTML= round(input * .70);
	document.getElementById("S75").innerHTML= round(input * .80);
	document.getElementById("S85").innerHTML= round(input * .90);
}

function Bnumbers2(input) {
	document.getElementById("B65").innerHTML= round(input * .70);
	document.getElementById("B75").innerHTML= round(input * .80);
	document.getElementById("B85").innerHTML= round(input * .90);
}

function Dnumbers2(input) {
	document.getElementById("D65").innerHTML= round(input * .70);
	document.getElementById("D75").innerHTML= round(input * .80);
	document.getElementById("D85").innerHTML= round(input * .90);
}

function Onumbers2(input) {
	document.getElementById("O65").innerHTML= round(input * .70);
	document.getElementById("O75").innerHTML= round(input * .80);
	document.getElementById("O85").innerHTML= round(input * .90);
}
/*Week 3 Functions*/
function Snumbers3(input) {
	document.getElementById("S65").innerHTML= round(input * .75);
	document.getElementById("S75").innerHTML= round(input * .85);
	document.getElementById("S85").innerHTML= round(input * .95);
}

function Bnumbers3(input) {
	document.getElementById("B65").innerHTML= round(input * .75);
	document.getElementById("B75").innerHTML= round(input * .85);
	document.getElementById("B85").innerHTML= round(input * .95);
}

function Dnumbers3(input) {
	document.getElementById("D65").innerHTML= round(input * .75);
	document.getElementById("D75").innerHTML= round(input * .85);
	document.getElementById("D85").innerHTML= round(input * .95);
}

function Onumbers3(input) {
	document.getElementById("O65").innerHTML= round(input * .75);
	document.getElementById("O75").innerHTML= round(input * .85);
	document.getElementById("O85").innerHTML= round(input * .95);
}
/*Week 4 Functions*/
function Snumbers4(input) {
	document.getElementById("S65").innerHTML= round(input * .40);
	document.getElementById("S75").innerHTML= round(input * .50);
	document.getElementById("S85").innerHTML= round(input * .60);
}

function Bnumbers4(input) {
	document.getElementById("B65").innerHTML= round(input * .40);
	document.getElementById("B75").innerHTML= round(input * .50);
	document.getElementById("B85").innerHTML= round(input * .60);
}

function Dnumbers4(input) {
	document.getElementById("D65").innerHTML= round(input * .40);
	document.getElementById("D75").innerHTML= round(input * .50);
	document.getElementById("D85").innerHTML= round(input * .60);
}

function Onumbers4(input) {
	document.getElementById("O65").innerHTML= round(input * .40);
	document.getElementById("O75").innerHTML= round(input * .50);
	document.getElementById("O85").innerHTML= round(input * .60);
}

/* Rep Functions*/
function Warmup(){
	var elems1 = document.getElementsByClassName("1warm");
			for(var i = 0; i < elems1.length; i++) {
   				 elems1[i].innerHTML= "5";
   				}
	var elems2 = document.getElementsByClassName("1lastwarm");
			for(var i = 0; i < elems2.length; i++) {
   				 elems2[i].innerHTML= "3";
   				}				
}
function Week1() {
	document.getElementById("Week").innerHTML= "Week I";
	var elems1 = document.getElementsByClassName("1");
			for(var i = 0; i < elems1.length; i++) {
   				 elems1[i].innerHTML= "5";
   				}
	var elems2 = document.getElementsByClassName("+1");
			for(var i = 0; i < elems2.length; i++) {
   				 elems2[i].innerHTML= "5+";
   				};

}

function Week2() {
	document.getElementById("Week").innerHTML= "Week II";
	var elems1 = document.getElementsByClassName("1");
			for(var i = 0; i < elems1.length; i++) {
   				 elems1[i].innerHTML= "3";
   				}
	var elems2 = document.getElementsByClassName("+1");
			for(var i = 0; i < elems2.length; i++) {
   				 elems2[i].innerHTML= "3+";
   				};

}

function Week3() {
	document.getElementById("Week").innerHTML= "Week III";
	var elems1 = document.getElementsByClassName("1 q");
			for(var i = 0; i < elems1.length; i++) {
   				 elems1[i].innerHTML= "5";
   				}
	var elems2 = document.getElementsByClassName("1 s");
			for(var i = 0; i < elems2.length; i++) {
   				 elems2[i].innerHTML= "3";
   				};
   	var elems3 = document.getElementsByClassName("+1");
			for(var i = 0; i < elems3.length; i++) {
   				 elems3[i].innerHTML= "1+";
   				};

}

function Week4() {
	document.getElementById("Week").innerHTML= "Week IV";
	var elems1 = document.getElementsByClassName("1");
			for(var i = 0; i < elems1.length; i++) {
   				 elems1[i].innerHTML= "5";
   				}
	var elems2 = document.getElementsByClassName("+1");
			for(var i = 0; i < elems2.length; i++) {
   				 elems2[i].innerHTML= "5";
   				};

}

function round(input) {
	var num = input / 5;
	num = Math.ceil(num);
	num = num * 5;
	return num;
}

/* Group function calls*/
function group1(squat,bench,deadlift,overheadpress){
	Snumbers(squat);
	Bnumbers(bench);
	Dnumbers(deadlift);
	Onumbers(overheadpress);
	Week1();
}

function group2(squat,bench,deadlift,overheadpress){
	Snumbers2(squat);
	Bnumbers2(bench);
	Dnumbers2(deadlift);
	Onumbers2(overheadpress);
	Week2();
}

function group3(squat,bench,deadlift,overheadpress){
	Snumbers3(squat);
	Bnumbers3(bench);
	Dnumbers3(deadlift);
	Onumbers3(overheadpress);
	Week3();
}

function group4(squat,bench,deadlift,overheadpress){
	Snumbers4(squat);
	Bnumbers4(bench);
	Dnumbers4(deadlift);
	Onumbers4(overheadpress);
	Week4();
}

function DarkMode(){
	document.getElementById("darkmode").style.color = "white";
	document.getElementById("darkmode").style.backgroundColor = "#121212";
	document.getElementById("nav").classList.remove("bg-primary");
	document.getElementById("nav").classList.remove("nav-primary");
	document.getElementById("nav").classList.add("bg-dark");
	document.getElementById("nav").classList.add("nav-dark");
	document.getElementById("w1").classList.remove("button-primary");
	document.getElementById("w1").classList.add("button-dark");
	document.getElementById("w2").classList.remove("button-primary");
	document.getElementById("w2").classList.add("button-dark");
	document.getElementById("w3").classList.remove("button-primary");
	document.getElementById("w3").classList.add("button-dark");
	document.getElementById("w4").classList.remove("button-primary");
	document.getElementById("w4").classList.add("button-dark");
	document.getElementById("yes-btn").classList.remove("button-primary");
	document.getElementById("no-btn").classList.add("button-dark");
	document.getElementById("weight-input").classList.remove("layout-border-primary");
	document.getElementById("weight-input").classList.add("layout-border-dark");
	document.getElementById("week-select").classList.remove("layout-border-primary");
	document.getElementById("week-select").classList.add("layout-border-dark");
	document.getElementById("warmup-select").classList.remove("layout-border-primary");
	document.getElementById("warmup-select").classList.add("layout-border-dark");
	document.getElementById("weight-output").classList.remove("layout-border-primary");
	document.getElementById("weight-output").classList.add("layout-border-dark");
	document.getElementById("myChart").classList.remove("layout-border-primary");
	document.getElementById("myChart").classList.add("layout-border-dark");
	document.getElementById("myChart1").classList.remove("layout-border-primary");
	document.getElementById("myChart1").classList.add("layout-border-dark");
	document.getElementById("myChart2").classList.remove("layout-border-primary");
	document.getElementById("myChart2").classList.add("layout-border-dark");
	document.getElementById("myChart3").classList.remove("layout-border-primary");
	document.getElementById("myChart3").classList.add("layout-border-dark");
}

function LightMode(){
	document.getElementById("darkmode").style.color = "white";
	document.getElementById("darkmode").style.backgroundColor = "#fff";
	document.getElementById("nav").classList.add("bg-primary");
	document.getElementById("nav").classList.add("nav-primary");
	document.getElementById("nav").classList.remove("bg-dark");
	document.getElementById("nav").classList.remove("nav-dark");
	document.getElementById("w1").classList.add("button-primary");
	document.getElementById("w1").classList.remove("button-dark");
	document.getElementById("w2").classList.add("button-primary");
	document.getElementById("w2").classList.remove("button-dark");
	document.getElementById("w3").classList.add("button-primary");
	document.getElementById("w3").classList.remove("button-dark");
	document.getElementById("w4").classList.add("button-primary");
	document.getElementById("w4").classList.remove("button-dark");
	document.getElementById("yes-btn").classList.add("button-primary");
	document.getElementById("no-btn").classList.remove("button-dark");
	document.getElementById("weight-input").classList.add("layout-border-primary");
	document.getElementById("weight-input").classList.remove("layout-border-dark");
	document.getElementById("week-select").classList.add("layout-border-primary");
	document.getElementById("week-select").classList.remove("layout-border-dark");
	document.getElementById("warmup-select").classList.add("layout-border-primary");
	document.getElementById("warmup-select").classList.remove("layout-border-dark");		
	document.getElementById("weight-output").classList.add("layout-border-primary");
	document.getElementById("weight-output").classList.remove("layout-border-dark");
	document.getElementById("myChart").classList.add("layout-border-primary");
	document.getElementById("myChart").classList.remove("layout-border-dark");
	document.getElementById("myChart1").classList.add("layout-border-primary");
	document.getElementById("myChart1").classList.remove("layout-border-dark");
	document.getElementById("myChart2").classList.add("layout-border-primary");
	document.getElementById("myChart2").classList.remove("layout-border-dark");
	document.getElementById("myChart3").classList.add("layout-border-primary");
	document.getElementById("myChart3").classList.remove("layout-border-dark");
}

function addWarmUp(squat, bench, overhead, dead){
	//squat
    var tag = document.createElement("p");
    var text = document.createTextNode("Warm Up");
	tag.id = "name";
	tag.className += "text-center";
    tag.appendChild(text);
    var element = document.getElementById("warmup");
    element.appendChild(tag);
	//first td
	var tag = document.createElement("table");
	tag.id = "warm-up-table-squat";
	tag.className += "center-justify";
	var element = document.getElementById("warmup-reps");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "1head";
	var element = document.getElementById("warm-up-table-squat");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	tag.className += "right-padding";
	var text = document.createTextNode("Reps");
	tag.appendChild(text);
	var element = document.getElementById("1head");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	var text = document.createTextNode("Weight");
	tag.appendChild(text);
	var element = document.getElementById("1head");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "1st";
	var element = document.getElementById("warm-up-table-squat");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className += "text-center";
	tag.className = "left-padding 1warm";
	var element = document.getElementById("1st");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "S4";
	var element = document.getElementById("1st");
    element.appendChild(tag);
	
	//second td
	var tag = document.createElement("tr");
	tag.id = "2nd";
	var element = document.getElementById("warm-up-table-squat");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1warm";
	var element = document.getElementById("2nd");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "S47";
	var element = document.getElementById("2nd");
    element.appendChild(tag);
	//third td
	var tag = document.createElement("tr");
	tag.id = "3rd";
	var element = document.getElementById("warm-up-table-squat");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1lastwarm";
	var element = document.getElementById("3rd");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "S5";
	var element = document.getElementById("3rd");
    element.appendChild(tag);
	
	//bench
    var tag = document.createElement("p");
    var text = document.createTextNode("Warm Up");
	tag.className += "text-center";
	tag.id = "name1";
    tag.appendChild(text);
    var element = document.getElementById("warmup1");
    element.appendChild(tag);
	//first td
	var tag = document.createElement("table");
	tag.id = "warm-up-table-bench";
	tag.className += "center-justify";
	var element = document.getElementById("warmup-reps1");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "2head";
	var element = document.getElementById("warm-up-table-bench");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	tag.className += "right-padding";
	var text = document.createTextNode("Reps");
	tag.appendChild(text);
	var element = document.getElementById("2head");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	var text = document.createTextNode("Weight");
	tag.appendChild(text);
	var element = document.getElementById("2head");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "1stbench";
	var element = document.getElementById("warm-up-table-bench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className += "text-center";
	tag.className = "left-padding 1warm";
	var element = document.getElementById("1stbench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "B4";
	var element = document.getElementById("1stbench");
    element.appendChild(tag);
	
	//second td
	var tag = document.createElement("tr");
	tag.id = "2ndbench";
	var element = document.getElementById("warm-up-table-bench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1warm";
	var element = document.getElementById("2ndbench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "B47";
	var element = document.getElementById("2ndbench");
    element.appendChild(tag);
	//third td
	var tag = document.createElement("tr");
	tag.id = "3rdbench";
	var element = document.getElementById("warm-up-table-bench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1lastwarm";
	var element = document.getElementById("3rdbench");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "B5";
	var element = document.getElementById("3rdbench");
    element.appendChild(tag);
	
	//Overhead
    var tag = document.createElement("p");
    var text = document.createTextNode("Warm Up");
	tag.className += "text-center";
	tag.id = "name2";
    tag.appendChild(text);
    var element = document.getElementById("warmup2");
    element.appendChild(tag);
	//first td
	var tag = document.createElement("table");
	tag.id = "warm-up-table-overhead";
	tag.className += "center-justify";
	var element = document.getElementById("warmup-reps2");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "3head";
	var element = document.getElementById("warm-up-table-overhead");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	tag.className += "right-padding";
	var text = document.createTextNode("Reps");
	tag.appendChild(text);
	var element = document.getElementById("3head");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	var text = document.createTextNode("Weight");
	tag.appendChild(text);
	var element = document.getElementById("3head");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "1stoverhead";
	var element = document.getElementById("warm-up-table-overhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className += "text-center";
	tag.className = "left-padding 1warm";
	var element = document.getElementById("1stoverhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "O4";
	var element = document.getElementById("1stoverhead");
    element.appendChild(tag);
	
	//second td
	var tag = document.createElement("tr");
	tag.id = "2ndoverhead";
	var element = document.getElementById("warm-up-table-overhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1warm";
	var element = document.getElementById("2ndoverhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "O47";
	var element = document.getElementById("2ndoverhead");
    element.appendChild(tag);
	//third td
	var tag = document.createElement("tr");
	tag.id = "3rdoverhead";
	var element = document.getElementById("warm-up-table-overhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1lastwarm";
	var element = document.getElementById("3rdoverhead");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "O5";
	var element = document.getElementById("3rdoverhead");
    element.appendChild(tag);
	
	//Deadlift
    var tag = document.createElement("p");
    var text = document.createTextNode("Warm Up");
	tag.className += "text-center";
	tag.id = "name3";
    tag.appendChild(text);
    var element = document.getElementById("warmup3");
    element.appendChild(tag);
	//first td
	var tag = document.createElement("table");
	tag.id = "warm-up-table-deadlift";
	tag.className += "center-justify";
	var element = document.getElementById("warmup-reps3");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "4head";
	var element = document.getElementById("warm-up-table-deadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	tag.className += "right-padding";
	var text = document.createTextNode("Reps");
	tag.appendChild(text);
	var element = document.getElementById("4head");
    element.appendChild(tag);
	
	var tag = document.createElement("th");
	var text = document.createTextNode("Weight");
	tag.appendChild(text);
	var element = document.getElementById("4head");
    element.appendChild(tag);
	
	var tag = document.createElement("tr");
	tag.id = "1stdeadlift";
	var element = document.getElementById("warm-up-table-deadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className += "text-center";
	tag.className = "left-padding 1warm";
	var element = document.getElementById("1stdeadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "D4";
	var element = document.getElementById("1stdeadlift");
    element.appendChild(tag);
	
	//second td
	var tag = document.createElement("tr");
	tag.id = "2nddeadlift";
	var element = document.getElementById("warm-up-table-deadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1warm";
	var element = document.getElementById("2nddeadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "D47";
	var element = document.getElementById("2nddeadlift");
    element.appendChild(tag);
	//third td
	var tag = document.createElement("tr");
	tag.id = "3rddeadlift";
	var element = document.getElementById("warm-up-table-deadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "left-padding 1lastwarm";
	var element = document.getElementById("3rddeadlift");
    element.appendChild(tag);
	
	var tag = document.createElement("td");
	tag.className = "text-center";
	tag.id = "D5";
	var element = document.getElementById("3rddeadlift");
    element.appendChild(tag);
	
	Swarmup(squat);
	Bwarmup(bench);
	Owarmup(overhead);
	Dwarmup(dead)
	Warmup();
	DisableNextButton("yes-btn");
}

function removeWarmUp(){
	    var element = document.getElementById("name");
		element.parentNode.removeChild(element);
		var element = document.getElementById("warm-up-table-squat");
		element.parentNode.removeChild(element);
		var element = document.getElementById("name1");
		element.parentNode.removeChild(element);
		var element = document.getElementById("warm-up-table-bench");
		element.parentNode.removeChild(element);
		var element = document.getElementById("name2");
		element.parentNode.removeChild(element);
		var element = document.getElementById("warm-up-table-deadlift");
		element.parentNode.removeChild(element);
		var element = document.getElementById("warm-up-table-overhead");
		element.parentNode.removeChild(element);
		var element = document.getElementById("name3");
		element.parentNode.removeChild(element);
		EnableNextButton("yes-btn");
}

function DisableNextButton(btnId) {
    const button = document.getElementById(btnId);
	button.disabled = true;
}

function EnableNextButton(btnId) {
    const button = document.getElementById(btnId);
	button.disabled = false;
}
