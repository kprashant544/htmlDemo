
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



	/*getting Email From Form*/

	function getEmail()
	{
		var email = document.getElementById("email").value;
		console.log(email);
		document.getElementById("your_email").innerHTML = "Your E-mail is : " +email;

	}

	/*getting Username From Form*/
	function getUsername()
	{
		var username = document.getElementById("username").value;
		console.log(username)
		document.getElementById("your_username").innerHTML = "Your Username is : " +username;

	}


	/*getting Password From Form*/
	function getPassword()
		{
			var password= document.getElementById("password").value;
			console.log(password);
			document.getElementById("your_password").innerHTML = "Your Password is : " +password;

		}



	/*getting DOB From Form*/
	function getDOB()
	{
		var date_of_birth= document.getElementById("date_of_birth").value;
		console.log(date_of_birth);
		document.getElementById("your_dob").innerHTML = "Your DOB is : " +date_of_birth;

	}

	/*getting role From Form*/
	function getRole()
	{
		var role= document.getElementById("role").value;
		console.log(role);
		document.getElementById("your_role").innerHTML = "Your role is : " +role;

	}



;


function getPersonData()
	{
			 const person = {

			 	name : "Prashant" ,
			 	age : 20 ,
			 	gender : "Male" ,
			 	weight : 57 

			 };

			document.getElementById("getPerson").innerHTML = "Your name is : <b>" +person.name +
			"</b><br> Your age is <b>" + person.age +
			"</b><br> Your gender is <b>" + person.gender+
			"</b><br> Your weight is <b>" + person.weight

	}



	let car = ["BMW","Audi","Lamborgini"];
	/*console.log(car[1]);
	car.length();*/


	function displayMessage() 
	{
		
		var age= document.getElementById("age").value;
		
		if (age>18) 
		{
				console.log(age)
				var message ="Eligible for Vote"
				
		}
		else{
				var message ="Not eligible for Vote"
		}

		alert(message)
		document.getElementById("message").innerHtml =message;

	}


	let day;
	console.log(new Date().getDay())
	switch(new Date().getDay())
	{
		case 0:
		day = "Sunday";
		break;
		case 1:
		day = "Monday";
		break;
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednesday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";

	}
	alert("Today is "+day)
	document.getElementById("day").innerHTML= "Today is" +day;
	//console.log(day);


function displayName5FiveTimes()
{
	for (var i = 1; i <= 5; i++) 
	{
		alert("Loop " + i);
	}
}




