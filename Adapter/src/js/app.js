import {ItemsStore} from "./components/itemsStore";
import {RucksackAdapter} from "./components/rucksackAdapter";
import {Hero} from "./components/hero";

window.addEventListener("load", () => {
	/* HERO WITH ADAPTER */
	let hero = new Hero(new RucksackAdapter());

	hero.items.addItem("Antidote");
	hero.items.addItem("SP Potion");
	hero.items.addItem("Eyedrop");

	console.log(hero.items.getItems());

	/* HERO WITHOUT ADAPTER */
	let heroTest = new Hero(new ItemsStore());

	heroTest.items.addItem("Toncture");
	heroTest.items.addItem("HP Potion");

	console.log(heroTest.items.getItems());
});