<?php
//start the session
session_start();
?>
<!DOCTYPE html>
<html>
<head>	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>fitness page</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script type="text/javascript" src="fitnessPage.js"></script>
	<style>
	.border {
		border: 10px solid black;
	}
	.text-center{
		text-align: center!important
	}
	.center-justify {
		margin-left:auto;
		margin-right:auto;
	}
	.right-padding {		
		padding-right: 20px;
	}
	.left-padding {		
		padding-left: 15px;
	}
	.inline {
		display: inline;
	}
	.padding {
		padding-top: 20px;
		padding-right: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
	}
	.padding1 {
		padding-top: 20px;
		padding-right: 5px;
		padding-left: 5px;
		padding-bottom: 20px;
	}
	.no-padding{
		margin-left: 0px;
		margin-right: 0px;
	}
	.bottom {
		margin-bottom: 16px;
	}
	.thick {
		border-width: 1px;
		border-color: black;
	}
	#logo {
		width:50px;
	}

	.greeting-guest{
		font-size: medium;
		margin-top: 8px;
		margin-right: 16px;
		color: white;
	}
	.top-margin{
		margin-top: 10px;
	}
	.layout-border-primary{
		width: 410px;
		margin-left: auto;
		margin-right: auto;
		color: white;
		background-color: #6200EE!important;
		border-radius: .25rem;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-right: 12`;
		padding-left: 12px;
		padding-right: 12px;
		-webkit-box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
		-moz-box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
		box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
	}
	.layout-border-dark{
		width: 410px;
		margin-left: auto;
		margin-right: auto;
		background-color: #343A3F!important;
		border-radius: .25rem;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-right: 12`;
		padding-left: 12px;
		padding-right: 12px;
		-webkit-box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
		-moz-box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
		box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
	}
	.button-primary{
		border: 1px solid white;
		background-color: #6200EE!important;
		color: white;
	}
	.button-dark{
		background-color: #343A3F!important;
		color: #BB86FC;
	}
	body{
		color:white;
	}
	.bg-primary{
		background-color: #6200EE!important;
	}
	.nav-primary{
		-webkit-box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
		-moz-box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
		box-shadow: 6px 10px 5px 0px rgba(191,189,191,1);
	}
	.nav-dark{
		-webkit-box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
		-moz-box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
		box-shadow: 6px 10px 5px 0px rgba(0,0,0,1);
	}
	.button-top{
		margin-top: 10px;
	}
	 /* The switch - the box around the slider */
	.switch {
	  position: relative;
	  display: inline-block;
	  width: 50px;
	  height: 24px;
	}

	/* Hide default HTML checkbox */
	.switch input {
	  opacity: 0;
	  width: 0;
	  height: 0;
	}

	/* The slider */
	.slider {
	  position: absolute;
	  cursor: pointer;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: #ccc;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	.slider:before {
	  position: absolute;
	  content: "";
	  height: 16px;
	  width: 16px;
	  left: 4px;
	  bottom: 4px;
	  background-color: white;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	input:checked + .slider {
	  background-color: rgb(255, 99, 132);
	}

	input:focus + .slider {
	  box-shadow: 0 0 1px #2196F3;
	}

	input:checked + .slider:before {
	  -webkit-transform: translateX(26px);
	  -ms-transform: translateX(26px);
	  transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
	  border-radius: 34px;
	}

	.slider.round:before {
	  border-radius: 50%;
	} 
	</style>
</head>
<body id="darkmode">

	<nav class="navbar navbar-expand-sm navbar-dark bg-primary nav-primary" id="nav">
	  <a class="navbar-brand no-right-margin" href="calculatorbeta.php"><img id="logo" src="Images/logo2.png" ></a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarsExample03">
		<ul class="navbar-nav mr-auto">

		</ul>
		<?php
		if(isset($_SESSION['loggedin'])){
			if($_SESSION["loggedin"]== True){
				echo '<ul class="navbar-nav" id="login-nav">';
				echo "<li class='nav-item active'><p class='greeting'>Welcome back, ", $_SESSION['FirstName'], "</p></li>";  
				echo '<li class="nav-item dropdown active">';
				echo '<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
				echo '<svg class="bi bi-person-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
				echo '<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>';
				echo '<path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>';
				echo '<path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>';
				echo '</svg>';
				echo 'Account</a>';
				echo '<div class="dropdown-menu" aria-labelledby="dropdown03">';
				  echo '<a class="dropdown-item" href="/order.php">Order</a>';
				  echo '<a class="dropdown-item" href="#">My Rewards</a>';
				  echo '<a class="dropdown-item" href="/ok.php">History</a>';
				  echo '<a class="dropdown-item" href="/logout.php">logout</a>';
				echo '</div>';
				echo '</li>';
				echo '</ul>';
			}
			else if($_SESSION["loggedin"] == False){
				echo "<p class='greeting'>". "Welcome, Guest " . "</p>";
				echo "<a id='register' href='www.cafedb.xyz/register.php'>Register</a>";
			}
		}else{
			echo '<ul class="navbar-nav top-margin">';
			echo '<li class="nav-item active"><p class="greeting-guest"> Welcome, Guest  </p></li>';
			echo '</ul>';
		}
		?>
		<label class="switch" style="margin-bottom: 0px;">
		  <input type="checkbox">
		  <span class="slider round"></span>
		</label>
	</div>
	</nav>
	
	<div class="container">
	<div class="row">
	<div class="col">
	<div class="container text-center padding">
	<div class="row">
	<div class="col layout-border-primary" id="weight-input">
	<table class="center-justify">

		<p><strong>1. </strong>Enter your training max (lbs)</p>
		<tr>
			<td>Squat</td>
			<td><input class="thick" id="Squat" type="text" size="2">
		</tr>
		<tr>
			<td>Bench</td>
			<td><input class="thick" id="Bench" type="text" size="2">
		</tr>
		<tr>
			<td>Deadlift</td>
			<td><input class="thick" id="Dead" type="text" size="2">
		</tr>
		<tr>
			<td>Overhead Press</td>
			<td><input class="thick" id="Over" type="text" size="2">
		</tr>
	</table>
	</div>
	</div>
	</div>
	<div class="container-sm text-center padding">
	<div class="row">
	<div class=" col layout-border-primary" id="week-select">
	<p><strong>2. </strong>Select your current cycle week</p>
	<div class="buttonholder">
	<button onclick="group1( document.getElementById('Squat').value , document.getElementById('Bench').value , 
							 document.getElementById('Dead').value, document.getElementById('Over').value)" class="btn button-primary" id="w1">Week 1</button>
	<button onclick="group2( document.getElementById('Squat').value , document.getElementById('Bench').value , 
							 document.getElementById('Dead').value, document.getElementById('Over').value)"  class="btn button-primary" id="w2">Week 2</button>
	<button onclick="group3( document.getElementById('Squat').value , document.getElementById('Bench').value , 
							 document.getElementById('Dead').value, document.getElementById('Over').value)"  class="btn button-primary" id="w3">Week 3</button>
	<button onclick="group4( document.getElementById('Squat').value , document.getElementById('Bench').value , 
							 document.getElementById('Dead').value, document.getElementById('Over').value)"  class="btn button-primary" id="w4">Week 4</button>
	</div>
	</div>
	</div>
	</div>
	<div class="container-sm text-center padding">
	<div class="row">
	<div class="col layout-border-primary" id="warmup-select">
	<p><strong>3. </strong>Would you like to include warm up weight?</p>
	<div class="buttonholder">
	<button onclick="addWarmUp(document.getElementById('Squat').value,document.getElementById('Bench').value,
	document.getElementById('Over').value, document.getElementById('Dead').value)" class="btn button-primary" id="yes-btn">Yes</button>
	<button onclick="removeWarmUp()" class="btn button-primary" id="no-btn">No</button>
	</div>
	</div>
	</div>
	</div>
	</div>
	
	<div class="col">
	<div class="container-sm padding">
	<div class="row">
	<div class="col layout-border-primary" id="weight-output">
	<p class="text-center">Your working weight, set and reps (lbs)</p>
	<p class="text-center" id="Week"></p>
		<div class="row no-padding bottom">
			<div class="col-6">
				<p class="text-center">Squat</p>
				<div id="warmup"></div>
				<div id="warmup-reps"></div>
				<table class="center-justify">
				
				<tr>
					<th class="right-padding">Reps</th>
					<th>Weight</th>
				</tr>
				<tr>
					<td class="left-padding 1 q"></td>
					<td class="text-center" id="S65"></td>
				</tr>
				<tr>
					<td class="left-padding 1 s"></td>
					<td class="text-center" id="S75"></td>
				</tr>
				<tr>
					<td class="left-padding +1"></td>
					<td class="text-center" id="S85"></td>
				</tr>
				</table>
			</div>

		<div class="col-6">
			<p class="text-center">Bench</p>
			<div id="warmup1"></div>
			<div id="warmup-reps1"></div>
			<table class="center-justify">
				<tr>
					<th class="right-padding">Reps</th>
					<th>Weight</th>
				</tr>
				<tr>
					<td class="left-padding 1 q"></td>
					<td class="text-center" id="B65"></td>
				</tr>
				<tr>
					<td class="left-padding 1 s"></td>
					<td class="text-center" id="B75"></td>
				</tr>
				<tr>
					<td class=" left-padding +1"></td>
					<td class="text-center" id="B85"></td>
				</tr>
			</table>
		</div>
		</div>
		<div class="row no-padding">
		<div class="col-6">
			<p class="text-center">Deadlift</p>
			<div id="warmup3"></div>
			<div id="warmup-reps3"></div>
			<table class="center-justify">
				<tr>
					<th class="right-padding">Reps</th>
					<th>Weight</th>
				</tr>
				<tr>
					<td class="left-padding 1 q"></td>
					<td class="text-center" id="D65"></td>
				</tr>
				<tr>
					<td class="left-padding 1 s"></td>
					<td class="text-center" id="D75"></td>
				</tr>
				<tr>
					<td class="left-padding +1"></td>
					<td class="text-center" id="D85"></td>
				</tr>
			</table>
		</div>

	<div class="col-6">	
		<p class="text-center">Overhead Press</p>
		<div id="warmup2"></div>
		<div id="warmup-reps2"></div>
		<table class="center-justify">
			<tr>
				<th class=" right-padding"> Reps </th>
				<th class=""> Weight </th>
			</tr>
			<tr>
				<td class="left-padding 1 q"></td>
				<td class="text-center" id="O65"></td>
			</tr>
			<tr>
				<td class="left-padding 1 s"></td>
				<td class="text-center" id="O75"></td>
			</tr>
			<tr>
				<td class="left-padding +1"></td>
				<td class="text-center" id="O85"></td>
			</tr>
		</table>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
 </body>
</html>
