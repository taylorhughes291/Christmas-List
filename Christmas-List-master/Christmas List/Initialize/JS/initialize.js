var initializeContinue = 0;
function initializeList() {

	/*
	Work to be done
		Link to the Customer Input page upon successful submission
		Send variables to database
	*/

	initializeContinue = 1;
	var listName = document.forms[0].elements[0].value;
	var budget = document.forms[0].elements[1].value;
	var recipients = document.forms[0].elements[2].value;

	
	if (budget === "" || recipients === "") {
		alert("Please enter your overall budget and number of gift recipients to continue.");
		initializeContinue = 2;
	}

	if (listName === "") {
		listName = "User's Nice List " + Date();
	}

	if (recipients < 1 || recipients > 75) {
		alert("Please enter between 1 and 75 under Number of Recipients to continue.");
		initializeContinue = 2;
	}

	if (initializeContinue === 1) {
		var initPackage1 = {
		listName: listName,
		budget: budget,
		noRecipients: recipients
		};

		sessionStorage.setItem("listName", initPackage1.listName);
		sessionStorage.setItem("budget", initPackage1.budget);
		sessionStorage.setItem("noRecipients", initPackage1.noRecipients);
		window.location.href = "initialize2.html";
	}
		


	console.log(listName);
	console.log(budget);
	console.log(recipients);
	console.log(initPackage1);
}