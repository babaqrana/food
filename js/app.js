var iconUrl = 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/2x/',
	iconUrl = 'https://img.icons8.com/color-glass/1x/',
	iconNames = {"1":"external-BBQ-fast-food-smashingstocks-flat-smashing-stocks.png","2":"external-Beer-fast-food-smashingstocks-flat-smashing-stocks.png","3":"external-Buns-fast-food-smashingstocks-flat-smashing-stocks.png","4":"external-Cheese-Balls-fast-food-smashingstocks-flat-smashing-stocks.png","5":"external-Chicken-Wing-fast-food-smashingstocks-flat-smashing-stocks.png","6":"external-Chips-fast-food-smashingstocks-flat-smashing-stocks.png","7":"external-Cocktail-fast-food-smashingstocks-flat-smashing-stocks.png","8":"external-Coffee-fast-food-smashingstocks-flat-smashing-stocks.png","9":"external-Corn-fast-food-smashingstocks-flat-smashing-stocks.png","10":"external-Corn-Dog-fast-food-smashingstocks-flat-smashing-stocks.png","11":"external-Croissant-fast-food-smashingstocks-flat-smashing-stocks.png","12":"external-Cupcake-fast-food-smashingstocks-flat-smashing-stocks.png","13":"external-Donut-fast-food-smashingstocks-flat-smashing-stocks-2.png","14":"external-Donut-fast-food-smashingstocks-flat-smashing-stocks.png","15":"external-Drink-fast-food-smashingstocks-flat-smashing-stocks.png","16":"external-Dumplings-fast-food-smashingstocks-flat-smashing-stocks.png","17":"external-Egg-fast-food-smashingstocks-flat-smashing-stocks.png","18":"external-French-Fries-fast-food-smashingstocks-flat-smashing-stocks.png","19":"external-French-Fries-And-Ketchup-fast-food-smashingstocks-flat-smashing-stocks.png","20":"external-Fried-Chicken-fast-food-smashingstocks-flat-smashing-stocks-2.png","21":"external-Fried-Chicken-fast-food-smashingstocks-flat-smashing-stocks.png","22":"external-Hamburger-fast-food-smashingstocks-flat-smashing-stocks-2.png","23":"external-Hamburger-fast-food-smashingstocks-flat-smashing-stocks.png","24":"external-Hot-Dog-fast-food-smashingstocks-flat-smashing-stocks.png","25":"external-Ice-Cream-fast-food-smashingstocks-flat-smashing-stocks-2.png","26":"external-Ice-Cream-fast-food-smashingstocks-flat-smashing-stocks.png","27":"external-Ketchup-fast-food-smashingstocks-flat-smashing-stocks.png","28":"external-Meal-fast-food-smashingstocks-flat-smashing-stocks.png","29":"external-Meat-Balls-fast-food-smashingstocks-flat-smashing-stocks.png","30":"external-Milk-fast-food-smashingstocks-flat-smashing-stocks.png","31":"external-Noodles-fast-food-smashingstocks-flat-smashing-stocks.png","32":"external-Onion-Rings-fast-food-smashingstocks-flat-smashing-stocks.png","33":"external-Orange-Juice-fast-food-smashingstocks-flat-smashing-stocks.png","34":"external-Pizza-fast-food-smashingstocks-flat-smashing-stocks-2.png","35":"external-Pizza-fast-food-smashingstocks-flat-smashing-stocks.png","36":"external-Popcorn-fast-food-smashingstocks-flat-smashing-stocks.png","37":"external-Roll-fast-food-smashingstocks-flat-smashing-stocks.png","38":"external-Salad-fast-food-smashingstocks-flat-smashing-stocks-2.png","39":"external-Salad-fast-food-smashingstocks-flat-smashing-stocks.png","40":"external-Sandwich-fast-food-smashingstocks-flat-smashing-stocks-2.png","41":"external-Sandwich-fast-food-smashingstocks-flat-smashing-stocks.png","42":"external-Sausage-fast-food-smashingstocks-flat-smashing-stocks.png","43":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks-3.png","44":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks-2.png","45":"external-Soda-fast-food-smashingstocks-flat-smashing-stocks.png","46":"external-Sushi-fast-food-smashingstocks-flat-smashing-stocks-2.png","47":"external-Sushi-fast-food-smashingstocks-flat-smashing-stocks.png","48":"external-Tea-fast-food-smashingstocks-flat-smashing-stocks.png","49":"external-Water-fast-food-smashingstocks-flat-smashing-stocks.png","50":"external-Acorn-food-smashingstocks-flat-smashing-stocks.png","51":"external-Apple-food-smashingstocks-flat-smashing-stocks-2.png","52":"external-Apple-food-smashingstocks-flat-smashing-stocks.png","53":"external-Apple-Pie-food-smashingstocks-flat-smashing-stocks.png","54":"external-BBQ-Skewer-food-smashingstocks-flat-smashing-stocks.png","55":"external-Bacon-food-smashingstocks-flat-smashing-stocks-2.png","56":"external-Bacon-food-smashingstocks-flat-smashing-stocks.png","57":"external-Baguette-food-smashingstocks-flat-smashing-stocks.png","58":"external-Bananas-food-smashingstocks-flat-smashing-stocks.png","59":"external-Beans-food-smashingstocks-flat-smashing-stocks.png","60":"external-Beefsteak-food-smashingstocks-flat-smashing-stocks.png","61":"external-Biscuit-food-smashingstocks-flat-smashing-stocks.png","62":"external-Biscuits-food-smashingstocks-flat-smashing-stocks.png","63":"external-Blackcurrant-food-smashingstocks-flat-smashing-stocks.png","64":"external-Blueberries-food-smashingstocks-flat-smashing-stocks.png","65":"external-Bow-Pasta-food-smashingstocks-flat-smashing-stocks.png","66":"external-Bread-food-smashingstocks-flat-smashing-stocks-2.png","67":"external-Bread-food-smashingstocks-flat-smashing-stocks.png","68":"external-Broccoli-food-smashingstocks-flat-smashing-stocks.png","69":"external-Burrito-food-smashingstocks-flat-smashing-stocks.png","70":"external-Cake-food-smashingstocks-flat-smashing-stocks-5.png","71":"external-Cake-food-smashingstocks-flat-smashing-stocks-4.png","72":"external-Cake-food-smashingstocks-flat-smashing-stocks-3.png","73":"external-Cake-food-smashingstocks-flat-smashing-stocks-2.png","74":"external-Cake-food-smashingstocks-flat-smashing-stocks.png","75":"external-Candy-food-smashingstocks-flat-smashing-stocks.png","76":"external-Canned-Fish-food-smashingstocks-flat-smashing-stocks.png","77":"external-Carrot-food-smashingstocks-flat-smashing-stocks.png","78":"external-Cheese-food-smashingstocks-flat-smashing-stocks-2.png","79":"external-Cheese-food-smashingstocks-flat-smashing-stocks.png","80":"external-Cherries-food-smashingstocks-flat-smashing-stocks.png","81":"external-Chicken-food-smashingstocks-flat-smashing-stocks.png","82":"external-Chicken-Leg-food-smashingstocks-flat-smashing-stocks-2.png","83":"external-Chicken-Leg-food-smashingstocks-flat-smashing-stocks.png","84":"external-Chocolate-Bar-food-smashingstocks-flat-smashing-stocks.png","85":"external-Chocolate-Shake-food-smashingstocks-flat-smashing-stocks.png","86":"external-Clam-food-smashingstocks-flat-smashing-stocks.png","87":"external-Club-Sandwich-food-smashingstocks-flat-smashing-stocks.png","88":"external-Cocktail-food-smashingstocks-flat-smashing-stocks.png","89":"external-Coconut-food-smashingstocks-flat-smashing-stocks-2.png","90":"external-Coconut-food-smashingstocks-flat-smashing-stocks.png","91":"external-Coconut-Syrup-food-smashingstocks-flat-smashing-stocks.png","92":"external-Coffee-Shop-food-smashingstocks-flat-smashing-stocks.png","93":"external-Cola-Bottle-food-smashingstocks-flat-smashing-stocks.png","94":"external-Cola-Tin-food-smashingstocks-flat-smashing-stocks.png","95":"external-Cookies-food-smashingstocks-flat-smashing-stocks-2.png","96":"external-Cookies-food-smashingstocks-flat-smashing-stocks.png","97":"external-Corn-Cob-food-smashingstocks-flat-smashing-stocks.png","98":"external-Cotton-Candy-food-smashingstocks-flat-smashing-stocks.png","99":"external-Croissant-food-smashingstocks-flat-smashing-stocks.png","100":"external-Cupcake-food-smashingstocks-flat-smashing-stocks-2.png","101":"external-Cupcake-food-smashingstocks-flat-smashing-stocks.png","102":"external-Daikon-food-smashingstocks-flat-smashing-stocks.png","103":"external-Dish-food-smashingstocks-flat-smashing-stocks-2.png","104":"external-Dish-food-smashingstocks-flat-smashing-stocks.png","105":"external-Donut-food-smashingstocks-flat-smashing-stocks-3.png","106":"external-Donut-food-smashingstocks-flat-smashing-stocks-2.png","107":"external-Donut-food-smashingstocks-flat-smashing-stocks.png","108":"external-Drink-food-smashingstocks-flat-smashing-stocks.png","109":"external-Drumstick-food-smashingstocks-flat-smashing-stocks.png","110":"external-Dumplings-food-smashingstocks-flat-smashing-stocks.png","111":"external-Egg-food-smashingstocks-flat-smashing-stocks-2.png","112":"external-Egg-food-smashingstocks-flat-smashing-stocks.png","113":"external-Eggplant-food-smashingstocks-flat-smashing-stocks.png","114":"external-Fig-Fruit-food-smashingstocks-flat-smashing-stocks.png","115":"external-Flaming-Drink-food-smashingstocks-flat-smashing-stocks.png","116":"external-French-Fries-food-smashingstocks-flat-smashing-stocks.png","117":"external-Fried-Egg-food-smashingstocks-flat-smashing-stocks.png","118":"external-Gingerbread-food-smashingstocks-flat-smashing-stocks-2.png","119":"external-Gingerbread-food-smashingstocks-flat-smashing-stocks.png","120":"external-Gooseberries-food-smashingstocks-flat-smashing-stocks.png","121":"external-Grapes-food-smashingstocks-flat-smashing-stocks.png","122":"external-Hamburger-food-smashingstocks-flat-smashing-stocks-2.png","123":"external-Hamburger-food-smashingstocks-flat-smashing-stocks.png","124":"external-Hot-Dog-food-smashingstocks-flat-smashing-stocks.png","125":"external-Hotdog-food-smashingstocks-flat-smashing-stocks.png","126":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks-3.png","127":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks-2.png","128":"external-Ice-Cream-food-smashingstocks-flat-smashing-stocks.png","129":"external-Juice-food-smashingstocks-flat-smashing-stocks-2.png","130":"external-Juice-food-smashingstocks-flat-smashing-stocks.png","131":"external-Ketchup-food-smashingstocks-flat-smashing-stocks.png","132":"external-Lemon-food-smashingstocks-flat-smashing-stocks.png","133":"external-Macaroni-food-smashingstocks-flat-smashing-stocks.png","134":"external-Mango-food-smashingstocks-flat-smashing-stocks-2.png","135":"external-Mango-food-smashingstocks-flat-smashing-stocks.png","136":"external-Meat-food-smashingstocks-flat-smashing-stocks-2.png","137":"external-Meat-food-smashingstocks-flat-smashing-stocks.png","138":"external-Milk-food-smashingstocks-flat-smashing-stocks-2.png","139":"external-Milk-food-smashingstocks-flat-smashing-stocks.png","140":"external-Mocha-food-smashingstocks-flat-smashing-stocks.png","141":"external-Muffin-food-smashingstocks-flat-smashing-stocks-2.png","142":"external-Muffin-food-smashingstocks-flat-smashing-stocks.png","143":"external-Mulled-Wine-food-smashingstocks-flat-smashing-stocks.png","144":"external-Mushroom-food-smashingstocks-flat-smashing-stocks.png","145":"external-Nachos-food-smashingstocks-flat-smashing-stocks.png","146":"external-Nigiri-food-smashingstocks-flat-smashing-stocks.png","147":"external-Noodles-food-smashingstocks-flat-smashing-stocks.png","148":"external-Oil-Jug-food-smashingstocks-flat-smashing-stocks.png","149":"external-Online-Food-Order-food-smashingstocks-flat-smashing-stocks.png","150":"external-Peach-food-smashingstocks-flat-smashing-stocks.png","151":"external-Peanut-Jam-food-smashingstocks-flat-smashing-stocks.png","152":"external-Pear-food-smashingstocks-flat-smashing-stocks.png","153":"external-Pie-food-smashingstocks-flat-smashing-stocks-2.png","154":"external-Pie-food-smashingstocks-flat-smashing-stocks.png","155":"external-Pina-Colada-food-smashingstocks-flat-smashing-stocks.png","156":"external-Pineapple-food-smashingstocks-flat-smashing-stocks-2.png","157":"external-Pineapple-food-smashingstocks-flat-smashing-stocks.png","158":"external-Pizza-food-smashingstocks-flat-smashing-stocks-2.png","159":"external-Pizza-food-smashingstocks-flat-smashing-stocks.png","160":"external-Popcorn-food-smashingstocks-flat-smashing-stocks.png","161":"external-Popsicle-food-smashingstocks-flat-smashing-stocks.png","162":"external-Potato-Fries-food-smashingstocks-flat-smashing-stocks.png","163":"external-Pretzel-food-smashingstocks-flat-smashing-stocks.png","164":"external-Pudding-food-smashingstocks-flat-smashing-stocks-2.png","165":"external-Pudding-food-smashingstocks-flat-smashing-stocks.png","166":"external-Red-Chilli-food-smashingstocks-flat-smashing-stocks.png","167":"external-Refreshing-Drink-food-smashingstocks-flat-smashing-stocks.png","168":"external-Rice-food-smashingstocks-flat-smashing-stocks.png","169":"external-Rice-Bowl-food-smashingstocks-flat-smashing-stocks.png","170":"external-Samosas-food-smashingstocks-flat-smashing-stocks.png","171":"external-Sandwich-food-smashingstocks-flat-smashing-stocks.png","172":"external-Sausage-food-smashingstocks-flat-smashing-stocks-2.png","173":"external-Sausage-food-smashingstocks-flat-smashing-stocks.png","174":"external-Seaweeds-food-smashingstocks-flat-smashing-stocks.png","175":"external-Starfruit-food-smashingstocks-flat-smashing-stocks.png","176":"external-Steak-food-smashingstocks-flat-smashing-stocks.png","177":"external-Strawberry-food-smashingstocks-flat-smashing-stocks.png","178":"external-Sushi-food-smashingstocks-flat-smashing-stocks.png","179":"external-Sweet-Potatoes-food-smashingstocks-flat-smashing-stocks.png","180":"external-Sweets-food-smashingstocks-flat-smashing-stocks.png","181":"external-Swirl-Candy-food-smashingstocks-flat-smashing-stocks.png","182":"external-Taco-food-smashingstocks-flat-smashing-stocks.png","183":"external-Tacos-food-smashingstocks-flat-smashing-stocks.png","184":"external-Tea-Cup-food-smashingstocks-flat-smashing-stocks.png","185":"external-Temaki-food-smashingstocks-flat-smashing-stocks.png","186":"external-Toast-food-smashingstocks-flat-smashing-stocks.png","187":"external-Tomato-food-smashingstocks-flat-smashing-stocks.png","188":"external-Tomato-Sauce-food-smashingstocks-flat-smashing-stocks.png","189":"external-Turkey-food-smashingstocks-flat-smashing-stocks.png","190":"external-Vegetable-Bucket-food-smashingstocks-flat-smashing-stocks.png","191":"external-Waffle-food-smashingstocks-flat-smashing-stocks.png","192":"external-Water-Jug-food-smashingstocks-flat-smashing-stocks.png","193":"external-Watermelon-food-smashingstocks-flat-smashing-stocks.png","194":"external-Watermelon-Juice-food-smashingstocks-flat-smashing-stocks.png","195":"external-Watermelon-Piece-food-smashingstocks-flat-smashing-stocks.png","196":"external-Wine-Bottle-food-smashingstocks-flat-smashing-stocks.png","197":"external-Yogurt-food-smashingstocks-flat-smashing-stocks.png"},
	iconNames = {"1":"crab.png","2":"dressed-fish.png","3":"filleted-fish.png","4":"fish-food.png","5":"octopus.png","6":"prawn.png","7":"shellfish.png","8":"shrimp-and-lobster.png","9":"squid.png","10":"whole-fish.png","11":"bok-choy.png","12":"broccoli.png","13":"brocolini1.png","14":"carrot.png","15":"cauliflower.png","16":"celery.png","17":"chard.png","18":"chili-pepper.png","19":"collard-greens.png","20":"corn.png","21":"finocchio.png","22":"greenery-1.png","23":"group-of-vegetables.png","24":"kohlrabi.png","25":"leek.png","26":"mushrooms--1.png","27":"plantain.png","28":"pumpkin.png","29":"soy.png","30":"spinach.png","31":"squash.png","32":"sweet-potato.png","33":"tomato.png","34":"tomatoes.png","35":"vegetables-bag.png","36":"white-beans.png","37":"zucchini.png","38":"no-milk.png","39":"edible.png","40":"low-salt.png","41":"no-apple.png","42":"no-celery.png","43":"no-crustaceans.png","44":"no-eggs.png","45":"no-fish.png","46":"no-fructose.png","47":"no-gmo--v2.png","48":"no-gmo--v1.png","49":"no-gluten.png","50":"no-lupines.png","51":"no-meat.png","52":"no-mustard.png","53":"no-nuts.png","54":"no-peanut.png","55":"no-shellfish.png","56":"no-soy.png","57":"no-sugar.png","58":"non-lactose-food.png","59":"no-sugar2.png","60":"asparagus.png","61":"bad_apple.png","62":"beet.png","63":"breakfast.png","64":"brigadeiro.png","65":"cabbage.png","66":"chupa-chups.png","67":"coffee-beans-.png","68":"cookbook.png","69":"cooking-book.png","70":"cucumber.png","71":"deliver-food.png","72":"diabetic-food.png","73":"dinner.png","74":"egg-stand.png","75":"eggplant.png","76":"empty-jam-jar.png","77":"fast-food-drive-thru.png","78":"fast-moving-consumer-goods.png","79":"firm-tofu.png","80":"fish-skeleton.png","81":"sack-of-flour.png","82":"food-receiver.png","83":"garlic.png","84":"cute-pumpkin.png","85":"kawaii-bread-1.png","86":"kawaii-broccoli.png","87":"kawaii-coffee.png","88":"kawaii-croissant.png","89":"kawaii-cupcake.png","90":"kawaii-egg.png","91":"kawaii-french-fries.png","92":"kawaii-ice-cream--v2.png","93":"kawaii-ice-cream--v1.png","94":"kawaii-jam.png","95":"kawaii-milk.png","96":"kawaii-noodle.png","97":"kawaii-pizza.png","98":"kawaii-shellfish.png","99":"kawaii-soda.png","100":"kawaii-steak.png","101":"kawaii-sushi.png","102":"kawaii-taco.png","103":"baguette.png","104":"bake.png","105":"biscuits.png","106":"bread.png","107":"bread-loaf.png","108":"bread-and-rolling-pin.png","109":"bread-and-rye.png","110":"bavarian-pretzel.png","111":"gingerbread-house.png","112":"merry-pie.png","113":"naan.png","114":"stale-bread.png","115":"blueberry.png","116":"cherry.png","117":"grapes.png","118":"raspberry.png","119":"strawberry.png","120":"ice-cream-in-waffle-cone.png","121":"jam.png","122":"jelly.png","123":"lollipop-candy.png","124":"melting-ice-cream.png","125":"pastel-de-nata.png","126":"strawberry-cheesecake.png","127":"sweets.png","128":"toaster-pastry.png","129":"bagel.png","130":"bento.png","131":"caviar.png","132":"cheese.png","133":"chocolate-spread.png","134":"dim-sum.png","135":"fish-and-chips.png","136":"fondue.png","137":"food-and-wine.png","138":"greek-salad.png","139":"guacamole.png","140":"gyoza.png","141":"lasagna.png","142":"lunchbox.png","143":"noodles.png","144":"omlette.png","145":"paella.png","146":"pancake.png","147":"porridge.png","148":"rice-bowl.png","149":"salad.png","150":"salami-pizza.png","151":"salmon-sushi.png","152":"sandwich-with-fried-egg.png","153":"sauce.png","154":"seafood.png","155":"spaghetti.png","156":"spam-can.png","157":"spring-roll.png","158":"sunny-side-up-eggs.png","159":"sushi.png","160":"tapas.png","161":"tin-can.png","162":"toast.png","163":"wine-and-grapes.png","164":"yogurt.png","165":"coconut-milk.png","166":"coffee-capsule.png","167":"cola.png","168":"green-tea.png","169":"hemp-milk.png","170":"hot-chocolate.png","171":"lemonade.png","172":"milk-bottle.png","173":"milk-carton.png","174":"oat-milk.png","175":"-takeaway-hot-drink.png","176":"tea-pair.png","177":"the-toast.png","178":"warm-drink.png","179":"wine-and-glass.png","180":"asian-street-food.png","181":"box-of-cereal.png","182":"burrito.png","183":"cereal.png","184":"cheeseburger.png","185":"chicken-and-waffle.png","186":"chinese-fried-rice.png","187":"chinese-noodle.png","188":"fast-food.png","189":"french-fries.png","190":"fried-chicken.png","191":"fry.png","192":"hamburger.png","193":"hot-dog.png","194":"kfc-chicken.png","195":"mcdonalds-french-fries.png","196":"nachos.png","197":"pizza.png","198":"pizza-five-eighths.png","199":"plastic-food-container.png","200":"popcorn.png","201":"potato-chips.png","202":"quesadilla.png","203":"refreshments.png","204":"sandwich.png","205":"street-food.png","206":"taco.png","207":"take-away-food.png","208":"wrap.png","209":"apple.png","210":"apples--plate.png","211":"apples_plate_1.png","212":"apricot.png","213":"avocado.png","214":"bad-banana.png","215":"bad-orange.png","216":"bad-pear.png","217":"banana.png","218":"citrus-1.png","219":"citrus.png","220":"coconut.png","221":"cutted-melon.png","222":"cutted-watermelon.png","223":"date-fruit.png","224":"dragon-fruit.png","225":"durian.png","226":"fig-fruit.png","227":"fruit-bag.png","228":"group-of-fruits.png","229":"half-orange.png","230":"jackfruit.png","231":"lime.png","232":"lychee.png","233":"mango.png","234":"mangosteen.png","235":"melon.png","236":"orange.png","237":"papaya.png","238":"pineapple.png","239":"pomegranate.png","240":"rambutan.png","241":"slice-of-watermelon.png","242":"soursop.png","243":"tangelo.png","244":"watermelon.png","245":"whole-apple.png","246":"whole-melon.png","247":"whole-watermelon.png","248":"almond-butter.png","249":"basil.png","250":"black-peper.png","251":"bread-crumbs.png","252":"bulk-spices.png","253":"butter.png","254":"cinnamon-sticks.png","255":"cloves.png","256":"dozen-eggs.png","257":"dressing.png","258":"egg-basket.png","259":"egg-carton.png","260":"ketchup.png","261":"lentil.png","262":"ingredients-list.png","263":"maple-syrup.png","264":"matcha.png","265":"mayonnaise.png","266":"mozzarella.png","267":"mustard.png","268":"olive-oil.png","269":"olive-oil-bottle.png","270":"peanut-butter.png","271":"pepitas.png","272":"pistachio-sauce.png","273":"rice-vinegar.png","274":"rolled-oats.png","275":"salt.png","276":"salt-shaker.png","277":"sauce-bottle.png","278":"sesame.png","279":"sesame-oil.png","280":"soy-sauce.png","281":"pepper-shaker.png","282":"spoon-of-sugar.png","283":"sugar.png","284":"sugar-cube.png","285":"sugar-cubes.png","286":"sunflower-butter.png","287":"sunflower-oil.png","288":"sweetener.png","289":"thyme.png","290":"vegetable-bouillion-paste.png","291":"whipped-cream.png","292":"worcestershire-sauce.png","293":"bacon.png","294":"steak-well-done.png","295":"barbeque--v1.png","296":"steak-medium.png","297":"iranian-kebab--v2.png","298":"iranian-kebab--v1.png","299":"jamon.png","300":"kebab.png","301":"poultry-leg.png","302":"roast.png","303":"sausage.png","304":"sausages.png","305":"souvla.png","306":"steak.png","307":"steak-hot.png","308":"steak-very-hot.png","309":"thanksgiving.png","310":"caloric-energy.png","311":"carbohydrates.png","312":"fiber.png","313":"halal-sign.png","314":"healthy-eating.png","315":"healthy-food.png","316":"healthy-food-calories-calculator.png","317":"lipids.png","318":"natural-food.png","319":"non-vegetarian-food-symbol.png","320":"organic-food.png","321":"paleo-diet.png","322":"protein.png","323":"sodium.png","324":"vegan-food.png","325":"vegetarian-food.png","326":"vegetarian-food-symbol.png","327":"brazil-nut.png","328":"ceshew.png","329":"nut.png","330":"pistachios.png","331":"birthday-cake.png","332":"cake.png","333":"cinnamon-roll.png","334":"cookie.png","335":"cookies.png","336":"croissant.png","337":"cupcake.png","338":"doughnut.png","339":"macaron.png","340":"pie.png","341":"samosa.png","342":"grocery-bag.png","343":"grocery-shelf.png","344":"halal-food.png","345":"haram-food.png","346":"hazelnut.png","347":"ice-icon.png","348":"international-food.png","349":"kiwi.png","350":"lettuce.png","351":"low-cholesterol-food.png","352":"lunch.png","353":"mushbooh-food.png","354":"mushroom.png","355":"nonya-kueh.png","356":"olive.png","357":"onion.png","358":"paprika.png","359":"peach.png","360":"peanuts.png","361":"pear.png","362":"peas.png","363":"picnic--v2.png","364":"picnic--v1.png","365":"plum.png","366":"potato.png","367":"rack-of-lamb.png","368":"radish.png","369":"real-food-for-meals.png","370":"salami.png","371":"silken-tofu.png","372":"soup-plate.png","373":"spoiled-food.png","374":"stir.png","375":"tempeh.png","376":"tiffin.png","377":"burger-dip.png","378":"wicker-basket.png","379":"eggs.png","380":"flax-seeds.png","381":"flour-in-paper-packaging.png","382":"flour-of-rye.png","383":"ginger.png","384":"grains-of-rice.png","385":"hamper.png","386":"honey.png","387":"honey-spoon.png","388":"icing-sugar.png","389":"ingredients.png","390":"ingredients-for-cooking.png","391":"apple-jam.png","392":"banana-split.png","393":"berry-jam.png","394":"candy.png","395":"cheesecake.png","396":"cherry-cheesecake.png","397":"chocolate-bar.png","398":"cotton-candy.png","399":"dessert.png","400":"ice-cream-cone.png","401":"ice-cream-bowl.png","402":"ice-cream-in-waffle.png"},	
	json = {
		"foods": [{
				"name": "Punjene paprike",
				"icon": "1",
				"rating": "5",
				"cat": "Doe"
			},
			{
				"name": "Krckavo meso",
				"icon": "2",
				"rating": "5",
				"cat": "Doe",
				"last": "12.Januar.2023",
			},
			{
				"name": "Pizza",
				"icon": "4",
				"rating": "4",
				"cat": "Doe",
				"last": "14.Januar.2023",
			},
			{
				"name": "Piletina",
				"icon": "56",
				"rating": "3",
				"cat": "Doe",
				"last": "17.Januar.2023",
			},
			{
				"name": "Ramen supa",
				"icon": "152",
				"rating": "2",
				"cat": "Doe"
			},
			{
				"name": "Cufte",
				"icon": "175",
				"rating": "1",
				"cat": "Doe"
			}
		]
	};

var foods = json["foods"];


const weekdays = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];
const months = ["Januar","Februar","Mart","April","Maj","Jun","Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];

function GetDates(startDate, daysToAdd) {
    var aryDates = [];
	
	 for(var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date(),
			month = currentDate.getMonth();
        currentDate.setDate(startDate.getDate() - i);
		
        aryDates.push(DayAsString(currentDate.getDay()) + '.' + currentDate.getDate() + '.' + months[month] + '.' + currentDate.getFullYear());
    }
	
	aryDates = aryDates.reverse();	

    for(var i = 0; i <= daysToAdd-1; i++) {
        var currentDate = new Date(),
			month = currentDate.getMonth();
        currentDate.setDate(startDate.getDate() + 1 + i);
        aryDates.push(DayAsString(currentDate.getDay()) + '.' + currentDate.getDate() + '.' + months[month] + '.' + currentDate.getFullYear());
    }
	
    
    return aryDates;
}


function DayAsString(dayIndex) {
    
    
    return weekdays[dayIndex];
}

var startDate = new Date();


var aryDates = GetDates(startDate, 3);

console.log( aryDates );

var cal = $("#mini-calender"),
	foodWrapper = $(".food-wrapper");

var selDate = $(".selected-date");

var sliced = aryDates[3].split('.');


function checkString ( last ) {
	
	
	var separated = [];
	
	
	for (let i = 0; i < json['foods'].length; i++) {		
		if( json['foods'][i].hasOwnProperty('last') && last.indexOf( json['foods'][i]['last'] ) > -1 ) {		
			separated.push(json['foods'][i]);
		}
	}
	
	
	return separated;
	
	
}




for (let i = 0; i < aryDates.length; i++) {
	var asdasd = aryDates[i].split('.'),
		today = (asdasd[1] == startDate.getDate())? " today active": "",
		prev = (i < 3)? " prev": "";
		
		var foodByDate = $('<div data-weekday="'+asdasd[0]+'" class="food-by-date'+today+prev+'"><div class="selected-date"></div><div class="food-list empty"><img src="images/shine-young-woman-meditating-in-nature-surrounded-by-butterflies-1.png"><div class="selected">Preskocen rucak na ovaj dan</div></div></div>').appendTo(foodWrapper),
			foodList = foodByDate.find('.food-list'),
			selDate = foodByDate.find('.selected-date');
			
			selDate.append(asdasd[0] + ', ' + asdasd[1] + '. ' + asdasd[2]);
		
		
		
		
		
		
		var separated = checkString(aryDates[i]);
		if( separated.length ) {
			
			for (let r = 0; r < separated.length; r++) {
				var food = separated[r];
				
				
				
		
				
					
					
					
					
				
				
				
				
				
				foodList.removeClass('empty').html('').append('<div class="food" data-cat="'+food.cat+'"><div class="icon"><img src="'+iconUrl+iconNames[food.icon]+'"></div><div class="food-side"><div class="food-name"><span>'+food.name+'</span></div><div class="food-rating"><i data-star="'+food.rating+'"></i></div><div class="food-edit"><span class="material-symbols-rounded">more_vert</span></div></div></div>');
			}
		}
		
	cal.append('<div data-weekday="'+asdasd[0]+'" class="date'+today+prev+'"><div class="date-wrap"><span class="week">'+asdasd[0].slice(0,3)+'</span><span class="day">'+asdasd[1]+'</span></div></div>');
}


var foodList = $(".food-list");



$(window).on( 'load', function() {
	$('#preloader').fadeOut();
});


$('body').on('click', '.date:not(.active)', function() {
	var weekday = $(this).data('weekday');
	
	$('.date.active, .food-by-date.active').removeClass("active");
	$(this).addClass("active");
	
	$('.food-wrapper .food-by-date[data-weekday="'+weekday+'"]').addClass('active');
	
	
});























