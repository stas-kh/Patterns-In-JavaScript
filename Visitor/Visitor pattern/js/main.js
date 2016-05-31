class IVisitor {
	visit(obj) {
	};
}
;

class BonusBalanceVisitor extends IVisitor {
	visit(hero) {
		const BONUS_POINTS = 50;
		const BONUS_INTERVAL_MS = 1000;
		const BONUS_TIME_MS = 10000;

		$(".bonus-time").toggleClass("active");
		$(".extra-points").text("(+" + hero.bonusPoints + ")");

		var bonusInterval = setInterval(function () {
			hero.addBonusPoints(BONUS_POINTS);
			$(".extra-points").text("(+" + hero.bonusPoints + ")");
		}, BONUS_INTERVAL_MS);

		setTimeout(function () {
			clearInterval(bonusInterval);
			$(".bonus-time").toggleClass("active");
		}, BONUS_TIME_MS);
	}
}
;


class IVisitable {
	accept(visitor) {
	};
}
;

class Hero extends IVisitable {
	constructor() {
		super();

		this.points = 0;
		this.bonusPoints = 0;
	};

	accept(visitor) {
		visitor.visit(this);
	};

	addPoints(points) {
		this.points += points;
	};

	addBonusPoints(points) {
		this.bonusPoints += points;
	};
}
;

class Slark extends Hero {
	constructor() {
		super();

		this.heroProperties = {
			strength: 20,
			agility: 5,
			intelligence: 10
		};
	}
}
;


var init = function () {
	var hero = new Slark(),
		visitor = new BonusBalanceVisitor();

	const PONTS_PER_SEC = 30;

	setInterval(function () {
		hero.addPoints(PONTS_PER_SEC);

		$(".points").text(hero.points);
		console.log(hero);
	}, 1000);

	setTimeout(function () {
		hero.accept(visitor);
	}, 4000);
};


$("#page-type").change(function () {
	if (this.value === "example") {
		$(".code-example").hide();
		$(".game-example").show();
	} else {
		$(".code-example").show();
		$(".game-example").hide();
	}
});

$("#initialize").click(function () {
	init();
	$(this).hide();
});
