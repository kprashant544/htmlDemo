


	
	var a=1;
	var b=2;
	var c= a+b;
	console.log(c);

	var date = new Date();
	console.log(date);


	function getDate() 
	{
		var date = new Date();
		var par =document.getElementById("current_date");
		par.innerHTML= date;

		console.log(date);
		/*document.getElementById("current_date").style.color = "red";*/
		par.style.color = "red";
	}