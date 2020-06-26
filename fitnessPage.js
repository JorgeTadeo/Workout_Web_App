/*Week 1 Functions*/
function Snumbers(input) {
	document.getElementById("S85").innerHTML= input * .85;
	document.getElementById("S75").innerHTML= input * .75;
	document.getElementById("S65").innerHTML= input * .65;
}

function Bnumbers(input) {
	document.getElementById("B85").innerHTML= input * .85;
	document.getElementById("B75").innerHTML= input * .75;
	document.getElementById("B65").innerHTML= input * .65;
}

function Onumbers(input) {
	document.getElementById("O85").innerHTML= input * .85;
	document.getElementById("O75").innerHTML= input * .75;
	document.getElementById("O65").innerHTML= input * .65;
}

function Dnumbers(input) {
	document.getElementById("D85").innerHTML= input * .85;
	document.getElementById("D75").innerHTML= input * .75;
	document.getElementById("D65").innerHTML= input * .65;
}
/*Week 2 Functions*/
function Snumbers2(input) {
	document.getElementById("S65").innerHTML= input * .70;
	document.getElementById("S75").innerHTML= input * .80;
	document.getElementById("S85").innerHTML= input * .90;
}

function Bnumbers2(input) {
	document.getElementById("B65").innerHTML= input * .70;
	document.getElementById("B75").innerHTML= input * .80;
	document.getElementById("B85").innerHTML= input * .90;
}

function Dnumbers2(input) {
	document.getElementById("D65").innerHTML= input * .70;
	document.getElementById("D75").innerHTML= input * .80;
	document.getElementById("D85").innerHTML= input * .90;
}

function Onumbers2(input) {
	document.getElementById("O65").innerHTML= input * .70;
	document.getElementById("O75").innerHTML= input * .80;
	document.getElementById("O85").innerHTML= input * .90;
}
/*Week 3 Functions*/
function Snumbers3(input) {
	document.getElementById("S65").innerHTML= input * .75;
	document.getElementById("S75").innerHTML= input * .85;
	document.getElementById("S85").innerHTML= input * .95;
}

function Bnumbers3(input) {
	document.getElementById("B65").innerHTML= input * .75;
	document.getElementById("B75").innerHTML= input * .85;
	document.getElementById("B85").innerHTML= input * .95;
}

function Dnumbers3(input) {
	document.getElementById("D65").innerHTML= input * .75;
	document.getElementById("D75").innerHTML= input * .85;
	document.getElementById("D85").innerHTML= input * .95;
}

function Onumbers3(input) {
	document.getElementById("O65").innerHTML= input * .75;
	document.getElementById("O75").innerHTML= input * .85;
	document.getElementById("O85").innerHTML= input * .95;
}
/*Week 4 Functions*/
function Snumbers4(input) {
	document.getElementById("S65").innerHTML= input * .40;
	document.getElementById("S75").innerHTML= input * .50;
	document.getElementById("S85").innerHTML= input * .60;
}

function Bnumbers4(input) {
	document.getElementById("B65").innerHTML= input * .40;
	document.getElementById("B75").innerHTML= input * .50;
	document.getElementById("B85").innerHTML= input * .60;
}

function Dnumbers4(input) {
	document.getElementById("D65").innerHTML= input * .40;
	document.getElementById("D75").innerHTML= input * .50;
	document.getElementById("D85").innerHTML= input * .60;
}

function Onumbers4(input) {
	document.getElementById("O65").innerHTML= input * .40;
	document.getElementById("O75").innerHTML= input * .50;
	document.getElementById("O85").innerHTML= input * .60;
}

/* Rep Functions*/
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
	//if the ones place is bigger than 5 then increase tens by one.
	if (input > 5) {
		return document.getElementById("result").innerHTML= 10;
	} 
	 //if the ones place is smaller than 5 then make the number in the ones place zero.
	else if (input < 5) {
		return document.getElementById("result").innerHTML= 0;
	}
	//if the number is 5 then keep the number as is.
	else if (input == 5){
		return document.getElementById("result").innerHTML= 5;
	}
}

/* Group function calls*/
function group1(squat,bench,deadlift,overheadpress){
	Snumbers(squat);
	Bnumbers(bench);
	Dnumbers(deadlift);
	Onumbers(overheadpress);
	Week1();
};

function group2(squat,bench,deadlift,overheadpress){
	Snumbers2(squat);
	Bnumbers2(bench);
	Dnumbers2(deadlift);
	Onumbers2(overheadpress);
	Week2();
};

function group3(squat,bench,deadlift,overheadpress){
	Snumbers3(squat);
	Bnumbers3(bench);
	Dnumbers3(deadlift);
	Onumbers3(overheadpress);
	Week3();
};

function group4(squat,bench,deadlift,overheadpress){
	Snumbers4(squat);
	Bnumbers4(bench);
	Dnumbers4(deadlift);
	Onumbers4(overheadpress);
	Week4();
};
