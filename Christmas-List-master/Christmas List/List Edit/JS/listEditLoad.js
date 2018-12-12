var listName = "My Fun List 2018"
var budget = 500;

function print(message, id) {
	document.getElementById(id).innerHTML = message;
}

var title = listName + ' - $' + budget + ' <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>';
print(title, "giftList")

print(listPackage[0].recipientName, "recipientName");
var priorityBudget = listPackage[0].recipientPriority + " - $" + listPackage[0].recipientBudget.toFixed(2);
print(priorityBudget, "recipientPriorityBudget");
