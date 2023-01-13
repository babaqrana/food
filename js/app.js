

var json = {
	"foods": [{
			"name": "John",
			"icon": "18",
			"rating": "5",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "64",
			"rating": "5",
			"cat": "Doe"
		}
		,
		{
			"name": "John",
			"icon": "97",
			"rating": "4",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "23",
			"rating": "3",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "33",
			"rating": "2",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "123",
			"rating": "1",
			"cat": "Doe"
		}
	]
}

var foods = json["foods"];



var foodList = $("#food-list");

for (let i = 0; i < Object.keys(foods).length; i++) {
	var food = foods[i];
	foodList.append('<div class="food" data-cat="'+food.cat+'"><div class="icon"><img srcset="images/icons/'+food.icon+'.png"></div><div class="food-side"><div class="food-name"><span>'+food.name+'</span></div><div class="food-rating"><i data-star="'+food.rating+'"></i></div><div class="food-edit"><img src="images/edit.png"></div></div></div>');
}