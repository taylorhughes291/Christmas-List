//The purpose of this script is to gather the information that the customer input in initilize.html
//and render the deeper initialization page according to the previous input.

var listName = sessionStorage.getItem("listName");
var budget = parseFloat(sessionStorage.getItem("budget")).toFixed(2);
var recipients = parseInt(sessionStorage.getItem("noRecipients"));

function print(message, id) {
	document.getElementById(id).innerHTML = message;
}

var title = listName + ' - $' + budget + ' <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>';
print(title, "giftList")

var html = "";
for (var i = 1; i < recipients; i += 1) {
	html += '<form name="deepInitialize" class="deepInit rest">\
						<div class="input-block">\
							Recipient Name:<br>\
							<input type="text" name="recipientName" id="recipientName' + i + '" class="input"><br>\
						</div>\
						<div class="input-block">\
							Recipient Priority:<br>\
							<select name="priority" id="recipientPriority' + i + '" class="styled-select input">\
								<option value=""></option>\
								<option value="Small">Small</option>\
								<option value="Medium">Medium</option>\
								<option value="Large">Large</option>\
							</select><br>\
						</div>\
						<div class="input-block">\
							Recipient Keywords:<br>\
							<input type="text" name="keywords" id="recipientKeywords' + i + '" class="input"><br>\
						</div>\
					</form>';
}

print(html, "deepInitForm")