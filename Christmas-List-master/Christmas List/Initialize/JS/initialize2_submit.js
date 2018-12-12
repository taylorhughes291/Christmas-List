//The purpose of this script is to, upon clicking "Submit"
//	a) Check the quality of the customer's inputs and prevent the page from loading if there are problems
//	b) Calculate the budget for every recipient based off of total budget and recipient priority
//	c) Gather together all variables to prepare to send to the backend
//	d) Send all data to the backend for processing


function initializeDeepGrab() {
	// a)
	var initializeContinue2 = 1;
	var collection = [];

	for (var i = 0; i < recipients; i += 1) {
		var recipName = document.forms[i].elements[0].value;
		var recipPriority = document.forms[i].elements[1].value;
		var recipKeywords = document.forms[i].elements[2].value;

		var recip = {
			recipientName: recipName,
			recipientPriority: recipPriority,
			recipientKeywords: recipKeywords
		};

		collection.push(recip);
	}
	console.log(collection);

	for (var i = 0; i < collection.length; i += 1) {
		var cssFlag = "recipientName" + i;
		document.getElementById(cssFlag).style.borderStyle = "";
		document.getElementById(cssFlag).style.borderColor = "";

		cssFlag = "recipientPriority" + i;
		document.getElementById(cssFlag).style.borderStyle = "";
		document.getElementById(cssFlag).style.borderColor = "";

		cssFlag = "recipientKeywords" + i;
		document.getElementById(cssFlag).style.borderStyle = "";
		document.getElementById(cssFlag).style.borderColor = "";
	}

	for (var i = 0; i < collection.length; i += 1) {
		if (collection[i].recipientName === "") {
			initializeContinue2 = 2;
			var cssFlag = "recipientName" + i;
			document.getElementById(cssFlag).style.borderStyle = "solid";
			document.getElementById(cssFlag).style.borderColor = "red";
		}
		if (collection[i].recipientPriority === "") {
			initializeContinue2 = 2;
			var cssFlag = "recipientPriority" + i;
			document.getElementById(cssFlag).style.borderStyle = "solid";
			document.getElementById(cssFlag).style.borderColor = "red";
		}
		if (collection[i].recipientKeywords === "") {
			initializeContinue2 = 2;
			var cssFlag = "recipientKeywords" + i;
			document.getElementById(cssFlag).style.borderStyle = "solid";
			document.getElementById(cssFlag).style.borderColor = "red";
		}
	}
	if (initializeContinue2 === 2) {
		alert("Please make sure you fill out all fields before you submit.");
	} else {
		// b) and c)
		budgetCalculation(collection, budget, 2, 3.5);
	}
}


function budgetCalculation(collect, totalBudget, rMedium, rLarge) {
	var small = 0;
	var medium = 0;
	var large = 0;
	for (var i = 0; i < collect.length; i += 1) {
		if (collect[i].recipientPriority === "Small") {
			small += 1;
		} else if (collect[i].recipientPriority === "Medium") {
			medium += 1;
		} else if (collect[i].recipientPriority === "Large") {
			large += 1;
		}
	}
	var priceSmall = totalBudget / (small + (rMedium * medium) + (rLarge * large));
	var priceMedium = priceSmall * rMedium;
	var priceLarge = priceSmall * rLarge;

	for (var i = 0; i < collect.length; i += 1) {
		if (collect[i].recipientPriority === "Small") {
			collect[i].recipientBudget = priceSmall;
		} else if (collect[i].recipientPriority === "Medium") {
			collect[i].recipientBudget = priceMedium;
		} else if (collect[i].recipientPriority === "Large") {
			collect[i].recipientBudget = priceLarge;
		}
	}
}







