var iconUrl = 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/2x/',
	iconNames = {"1":"external-BBQ-fast-food-smashingstocks-flat-smashing-stocks.png","2":"external-Beer-fast-food-smashingstocks-flat-smashing-stocks.png","3":"external-Buns-fast-food-smashingstocks-flat-smashing-stocks.png","4":"external-Cheese-Balls-fast-food-smashingstocks-flat-smashing-stocks.png","5":"external-Chicken-Wing-fast-food-smashingstocks-flat-smashing-stocks.png","6":"external-Chips-fast-food-smashingstocks-flat-smashing-stocks.png","7":"external-Cocktail-fast-food-smashingstocks-flat-smashing-stocks.png","8":"external-Coffee-fast-food-smashingstocks-flat-smashing-stocks.png","9":"external-Corn-fast-food-smashingstocks-flat-smashing-stocks.png","10":"external-Corn-Dog-fast-food-smashingstocks-flat-smashing-stocks.png","11":"external-Croissant-fast-food-smashingstocks-flat-smashing-stocks.png","12":"external-Cupcake-fast-food-smashingstocks-flat-smashing-stocks.png","13":"external-Donut-fast-food-smashingstocks-flat-smashing-stocks-2.png","14":"external-Donut-fast-food-smashingstocks-flat-smashing-stocks.png","15":"external-Drink-fast-food-smashingstocks-flat-smashing-stocks.png","16":"external-Dumplings-fast-food-smashingstocks-flat-smashing-stocks.png","17":"external-Egg-fast-food-smashingstocks-flat-smashing-stocks.png","18":"external-French-Fries-fast-food-smashingstocks-flat-smashing-stocks.png","19":"external-French-Fries-And-Ketchup-fast-food-smashingstocks-flat-smashing-stocks.png","20":"external-Fried-Chicken-fast-food-smashingstocks-flat-smashing-stocks-2.png","21":"external-Fried-Chicken-fast-food-smashingstocks-flat-smashing-stocks.png","22":"external-Hamburger-fast-food-smashingstocks-flat-smashing-stocks-2.png","23":"external-Hamburger-fast-food-smashingstocks-flat-smashing-stocks.png","24":"external-Hot-Dog-fast-food-smashingstocks-flat-smashing-stocks.png","25":"external-Ice-Cream-fast-food-smashingstocks-flat-smashing-stocks-2.png","26":"external-Ice-Cream-fast-food-smashingstocks-flat-smashing-stocks.png","27":"external-Ketchup-fast-food-smashingstocks-flat-smashing-stocks.png","28":"external-Meal-fast-food-smashingstocks-flat-smashing-stocks.png","29":"external-Meat-Balls-fast-food-smashingstocks-flat-smashing-stocks.png","30":"external-Milk-fast-food-smashingstocks-flat-smashing-stocks.png","31":"external-Noodles-fast-food-smashingstocks-flat-smashing-stocks.png","32":"external-Onion-Rings-fast-food-smashingstocks-flat-smashing-stocks.png","33":"external-Orange-Juice-fast-food-smashingstocks-flat-smashing-stocks.png","34":"external-Pizza-fast-food-smashingstocks-flat-smashing-stocks-2.png","35":"external-Pizza-fast-food-smashingstocks-flat-smashing-stocks.png","36":"external-Popcorn-fast-food-smashingstocks-flat-smashing-stocks.png","37":"external-Roll-fast-food-smashingstocks-flat-smashing-stocks.png","38":"external-Salad-fast-food-smashingstocks-flat-smashing-stocks-2.png","39":"external-Salad-fast-food-smashingstocks-flat-smashing-stocks.png","40":"external-Sandwich-fast-food-smashingstocks-flat-smashing-stocks-2.png","41":"external-Sandwich-fast-food-smashingstocks-flat-smashing-stocks.png","42":"external-Sausage-fast-food-smashingstocks-flat-smashing-stocks.png","43":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks-3.png","44":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks-2.png","45":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks.png","46":"external-Sushi-fast-food-smashingstocks-flat-smashing-stocks-2.png","47":"external-Sushi-fast-food-smashingstocks-flat-smashing-stocks.png","48":"external-Tea-fast-food-smashingstocks-flat-smashing-stocks.png","49":"external-Water-fast-food-smashingstocks-flat-smashing-stocks.png","50":"external-Acorn-food-smashingstocks-flat-smashing-stocks.png","51":"external-Apple-food-smashingstocks-flat-smashing-stocks-2.png","52":"external-Apple-food-smashingstocks-flat-smashing-stocks.png","53":"external-Apple-Pie-food-smashingstocks-flat-smashing-stocks.png","54":"external-BBQ-Skewer-food-smashingstocks-flat-smashing-stocks.png","55":"external-Bacon-food-smashingstocks-flat-smashing-stocks-2.png","56":"external-Bacon-food-smashingstocks-flat-smashing-stocks.png","57":"external-Baguette-food-smashingstocks-flat-smashing-stocks.png","58":"external-Bananas-food-smashingstocks-flat-smashing-stocks.png","59":"external-Beans-food-smashingstocks-flat-smashing-stocks.png","60":"external-Beefsteak-food-smashingstocks-flat-smashing-stocks.png","61":"external-Biscuit-food-smashingstocks-flat-smashing-stocks.png","62":"external-Biscuits-food-smashingstocks-flat-smashing-stocks.png","63":"external-Blackcurrant-food-smashingstocks-flat-smashing-stocks.png","64":"external-Blueberries-food-smashingstocks-flat-smashing-stocks.png","65":"external-Bow-Pasta-food-smashingstocks-flat-smashing-stocks.png","66":"external-Bread-food-smashingstocks-flat-smashing-stocks-2.png","67":"external-Bread-food-smashingstocks-flat-smashing-stocks.png","68":"external-Broccoli-food-smashingstocks-flat-smashing-stocks.png","69":"external-Burrito-food-smashingstocks-flat-smashing-stocks.png","70":"external-Cake-food-smashingstocks-flat-smashing-stocks-5.png","71":"external-Cake-food-smashingstocks-flat-smashing-stocks-4.png","72":"external-Cake-food-smashingstocks-flat-smashing-stocks-3.png","73":"external-Cake-food-smashingstocks-flat-smashing-stocks-2.png","74":"external-Cake-food-smashingstocks-flat-smashing-stocks.png","75":"external-Candy-food-smashingstocks-flat-smashing-stocks.png","76":"external-Canned-Fish-food-smashingstocks-flat-smashing-stocks.png","77":"external-Carrot-food-smashingstocks-flat-smashing-stocks.png","78":"external-Cheese-food-smashingstocks-flat-smashing-stocks-2.png","79":"external-Cheese-food-smashingstocks-flat-smashing-stocks.png","80":"external-Cherries-food-smashingstocks-flat-smashing-stocks.png","81":"external-Chicken-food-smashingstocks-flat-smashing-stocks.png","82":"external-Chicken-Leg-food-smashingstocks-flat-smashing-stocks-2.png","83":"external-Chicken-Leg-food-smashingstocks-flat-smashing-stocks.png","84":"external-Chocolate-Bar-food-smashingstocks-flat-smashing-stocks.png","85":"external-Chocolate-Shake-food-smashingstocks-flat-smashing-stocks.png","86":"external-Clam-food-smashingstocks-flat-smashing-stocks.png","87":"external-Club-Sandwich-food-smashingstocks-flat-smashing-stocks.png","88":"external-Cocktail-food-smashingstocks-flat-smashing-stocks.png","89":"external-Coconut-food-smashingstocks-flat-smashing-stocks-2.png","90":"external-Coconut-food-smashingstocks-flat-smashing-stocks.png","91":"external-Coconut-Syrup-food-smashingstocks-flat-smashing-stocks.png","92":"external-Coffee-Shop-food-smashingstocks-flat-smashing-stocks.png","93":"external-Cola-Bottle-food-smashingstocks-flat-smashing-stocks.png","94":"external-Cola-Tin-food-smashingstocks-flat-smashing-stocks.png","95":"external-Cookies-food-smashingstocks-flat-smashing-stocks-2.png","96":"external-Cookies-food-smashingstocks-flat-smashing-stocks.png","97":"external-Corn-Cob-food-smashingstocks-flat-smashing-stocks.png","98":"external-Cotton-Candy-food-smashingstocks-flat-smashing-stocks.png","99":"external-Croissant-food-smashingstocks-flat-smashing-stocks.png","100":"external-Cupcake-food-smashingstocks-flat-smashing-stocks-2.png","101":"external-Cupcake-food-smashingstocks-flat-smashing-stocks.png","102":"external-Daikon-food-smashingstocks-flat-smashing-stocks.png","103":"external-Dish-food-smashingstocks-flat-smashing-stocks-2.png","104":"external-Dish-food-smashingstocks-flat-smashing-stocks.png","105":"external-Donut-food-smashingstocks-flat-smashing-stocks-3.png","106":"external-Donut-food-smashingstocks-flat-smashing-stocks-2.png","107":"external-Donut-food-smashingstocks-flat-smashing-stocks.png","108":"external-Drink-food-smashingstocks-flat-smashing-stocks.png","109":"external-Drumstick-food-smashingstocks-flat-smashing-stocks.png","110":"external-Dumplings-food-smashingstocks-flat-smashing-stocks.png","111":"external-Egg-food-smashingstocks-flat-smashing-stocks-2.png","112":"external-Egg-food-smashingstocks-flat-smashing-stocks.png","113":"external-Eggplant-food-smashingstocks-flat-smashing-stocks.png","114":"external-Fig-Fruit-food-smashingstocks-flat-smashing-stocks.png","115":"external-Flaming-Drink-food-smashingstocks-flat-smashing-stocks.png","116":"external-French-Fries-food-smashingstocks-flat-smashing-stocks.png","117":"external-Fried-Egg-food-smashingstocks-flat-smashing-stocks.png","118":"external-Gingerbread-food-smashingstocks-flat-smashing-stocks-2.png","119":"external-Gingerbread-food-smashingstocks-flat-smashing-stocks.png","120":"external-Gooseberries-food-smashingstocks-flat-smashing-stocks.png","121":"external-Grapes-food-smashingstocks-flat-smashing-stocks.png","122":"external-Hamburger-food-smashingstocks-flat-smashing-stocks-2.png","123":"external-Hamburger-food-smashingstocks-flat-smashing-stocks.png","124":"external-Hot-Dog-food-smashingstocks-flat-smashing-stocks.png","125":"external-Hotdog-food-smashingstocks-flat-smashing-stocks.png","126":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks-3.png","127":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks-2.png","128":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks.png","129":"external-Juice-food-smashingstocks-flat-smashing-stocks-2.png","130":"external-Juice-food-smashingstocks-flat-smashing-stocks.png","131":"external-Ketchup-food-smashingstocks-flat-smashing-stocks.png","132":"external-Lemon-food-smashingstocks-flat-smashing-stocks.png","133":"external-Macaroni-food-smashingstocks-flat-smashing-stocks.png","134":"external-Mango-food-smashingstocks-flat-smashing-stocks-2.png","135":"external-Mango-food-smashingstocks-flat-smashing-stocks.png","136":"external-Meat-food-smashingstocks-flat-smashing-stocks-2.png","137":"external-Meat-food-smashingstocks-flat-smashing-stocks.png","138":"external-Milk-food-smashingstocks-flat-smashing-stocks-2.png","139":"external-Milk-food-smashingstocks-flat-smashing-stocks.png","140":"external-Mocha-food-smashingstocks-flat-smashing-stocks.png","141":"external-Muffin-food-smashingstocks-flat-smashing-stocks-2.png","142":"external-Muffin-food-smashingstocks-flat-smashing-stocks.png","143":"external-Mulled-Wine-food-smashingstocks-flat-smashing-stocks.png","144":"external-Mushroom-food-smashingstocks-flat-smashing-stocks.png","145":"external-Nachos-food-smashingstocks-flat-smashing-stocks.png","146":"external-Nigiri-food-smashingstocks-flat-smashing-stocks.png","147":"external-Noodles-food-smashingstocks-flat-smashing-stocks.png","148":"external-Oil-Jug-food-smashingstocks-flat-smashing-stocks.png","149":"external-Online-Food-Order-food-smashingstocks-flat-smashing-stocks.png","150":"external-Peach-food-smashingstocks-flat-smashing-stocks.png","151":"external-Peanut-Jam-food-smashingstocks-flat-smashing-stocks.png","152":"external-Pear-food-smashingstocks-flat-smashing-stocks.png","153":"external-Pie-food-smashingstocks-flat-smashing-stocks-2.png","154":"external-Pie-food-smashingstocks-flat-smashing-stocks.png","155":"external-Pina-Colada-food-smashingstocks-flat-smashing-stocks.png","156":"external-Pineapple-food-smashingstocks-flat-smashing-stocks-2.png","157":"external-Pineapple-food-smashingstocks-flat-smashing-stocks.png","158":"external-Pizza-food-smashingstocks-flat-smashing-stocks-2.png","159":"external-Pizza-food-smashingstocks-flat-smashing-stocks.png","160":"external-Popcorn-food-smashingstocks-flat-smashing-stocks.png","161":"external-Popsicle-food-smashingstocks-flat-smashing-stocks.png","162":"external-Potato-Fries-food-smashingstocks-flat-smashing-stocks.png","163":"external-Pretzel-food-smashingstocks-flat-smashing-stocks.png","164":"external-Pudding-food-smashingstocks-flat-smashing-stocks-2.png","165":"external-Pudding-food-smashingstocks-flat-smashing-stocks.png","166":"external-Red-Chilli-food-smashingstocks-flat-smashing-stocks.png","167":"external-Refreshing-Drink-food-smashingstocks-flat-smashing-stocks.png","168":"external-Rice-food-smashingstocks-flat-smashing-stocks.png","169":"external-Rice-Bowl-food-smashingstocks-flat-smashing-stocks.png","170":"external-Samosas-food-smashingstocks-flat-smashing-stocks.png","171":"external-Sandwich-food-smashingstocks-flat-smashing-stocks.png","172":"external-Sausage-food-smashingstocks-flat-smashing-stocks-2.png","173":"external-Sausage-food-smashingstocks-flat-smashing-stocks.png","174":"external-Seaweeds-food-smashingstocks-flat-smashing-stocks.png","175":"external-Starfruit-food-smashingstocks-flat-smashing-stocks.png","176":"external-Steak-food-smashingstocks-flat-smashing-stocks.png","177":"external-Strawberry-food-smashingstocks-flat-smashing-stocks.png","178":"external-Sushi-food-smashingstocks-flat-smashing-stocks.png","179":"external-Sweet-Potatoes-food-smashingstocks-flat-smashing-stocks.png","180":"external-Sweets-food-smashingstocks-flat-smashing-stocks.png","181":"external-Swirl-Candy-food-smashingstocks-flat-smashing-stocks.png","182":"external-Taco-food-smashingstocks-flat-smashing-stocks.png","183":"external-Tacos-food-smashingstocks-flat-smashing-stocks.png","184":"external-Tea-Cup-food-smashingstocks-flat-smashing-stocks.png","185":"external-Temaki-food-smashingstocks-flat-smashing-stocks.png","186":"external-Toast-food-smashingstocks-flat-smashing-stocks.png","187":"external-Tomato-food-smashingstocks-flat-smashing-stocks.png","188":"external-Tomato-Sauce-food-smashingstocks-flat-smashing-stocks.png","189":"external-Turkey-food-smashingstocks-flat-smashing-stocks.png","190":"external-Vegetable-Bucket-food-smashingstocks-flat-smashing-stocks.png","191":"external-Waffle-food-smashingstocks-flat-smashing-stocks.png","192":"external-Water-Jug-food-smashingstocks-flat-smashing-stocks.png","193":"external-Watermelon-food-smashingstocks-flat-smashing-stocks.png","194":"external-Watermelon-Juice-food-smashingstocks-flat-smashing-stocks.png","195":"external-Watermelon-Piece-food-smashingstocks-flat-smashing-stocks.png","196":"external-Wine-Bottle-food-smashingstocks-flat-smashing-stocks.png","197":"external-Yogurt-food-smashingstocks-flat-smashing-stocks.png"},
	json = {
	"foods": [{
			"name": "John",
			"icon": "1",
			"rating": "5",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "2",
			"rating": "5",
			"cat": "Doe"
		}
		,
		{
			"name": "John",
			"icon": "4",
			"rating": "4",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "56",
			"rating": "3",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "152",
			"rating": "2",
			"cat": "Doe"
		},
		{
			"name": "John",
			"icon": "175",
			"rating": "1",
			"cat": "Doe"
		}
	]
}

var foods = json["foods"];


const weekdays = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];
const months = ["Januar","Februar","Mart","April","Maj","Jun","Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];

function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for(var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date(),
			month = currentDate.getMonth();
			console.log( currentDate );
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(DayAsString(currentDate.getDay()) + ' ' + currentDate.getDate() + ' ' + months[month]);
    }
    
    return aryDates;
}


function DayAsString(dayIndex) {
    
    
    return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 5);

console.log( aryDates[0] );

var cal = $("#mini-calender");

var selDate = $("#selected-date");

var sliced = aryDates[0].split(' ');
selDate.append(sliced[0] + ', ' + sliced[1] + ' ' + sliced[2])




for (let i = 0; i < aryDates.length; i++) {
	var asdasd = aryDates[i].split(' '),
		today = (i == 0)? " today": "";
	cal.append('<div class="date'+today+'"><div class="date-wrap"><span class="week">'+asdasd[0].slice(0,3)+'</span><span class="day">'+asdasd[1]+'</span></div></div>');
}


var foodList = $(".food-list");

for (let i = 0; i < Object.keys(foods).length; i++) {
	var food = foods[i];
	foodList.append('<div class="food" data-cat="'+food.cat+'"><div class="icon"><img src="'+iconUrl+iconNames[food.icon]+'"></div><div class="food-side"><div class="food-name"><span>'+food.name+'</span></div><div class="food-rating"><i data-star="'+food.rating+'"></i></div><div class="food-edit"><img src="images/edit.png"></div></div></div>');
}