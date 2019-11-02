<!DOCTYPE html>
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<!--- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script> -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
		<link rel="stylesheet" href="main.css" />
		<title>FLAMES - A relationship calculator</title>
	</head>
	<body>
		<div id="app" class="main-container">
			<div class="row">
				<h1 id="appname">{{ title }}</h1>
				<form action="" method="">
					<div class="form-group">
						<label>Your Name:</label>
						<input type="text" class="form-control input-lg" id="your_name" v-model="your_name" autocomplete="off" />

					</div>
					<div class="form-group">
						<label>Your Crush Name:</label>
						<input type="text" class="form-control input-lg" id="crush_name" v-model="crush_name" autocomplete="off" />
					</div>
					<div class="form-group">
						<button class="btn btn-primary btn-block btn-lg" v-on:click="checkResult">Submit</button>
					</div>
				</form>
				<div class="row">
					Created by: <a href="https://github.com/kennethesguerra">kennethesguerra</a>
				</div>
			</div>
			<div id="showResult" class="backdrop_result" v-show="showResult">
				<div id="result_container" class="result_container">
					<div class="result">
						<h1>{{ result }}</h1>
						<br />
						<br />
						<button class="btn btn-default btn-sm" v-on:click="viewComputation">
							View Computation
						</button>
					</div>
					<div class="computation" id="computation" v-show="showComputation">
						<h4>How it became <span>{{ result }}</span> ?</h4>
						<span v-html="computation">
					</div>
					<div id="btnClose" class="btnClose">
						<button class="btn btn-primary" v-on:click="closeResult">Close</button>
					</div>
				</div>
			</div>
		</div>
		<script src="main.js"></script>
	</body>
</html>	