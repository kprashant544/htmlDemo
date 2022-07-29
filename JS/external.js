
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
			console.log(password)
			document.getElementById("your_password").innerHTML = "Your Password is : " +password;

		}



	/*getting DOB From Form*/
	function getDOB()
	{
		var date_of_birth= document.getElementById("date_of_birth").value;
		console.log(date_of_birth)
		document.getElementById("your_dob").innerHTML = "Your DOB is : " +date_of_birth;

	}

	/*getting role From Form*/
	function getRole()
	{
		var role= document.getElementById("role").value;
		console.log(role)
		document.getElementById("your_role").innerHTML = "Your role is : " +role;

	}


