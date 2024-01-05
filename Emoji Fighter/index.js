let fighters = [
	"🐉",
	"🐥",
	"🐊",
	"💩",
	"🦍",
	"🐢",
	"🐩",
	"🦭",
	"🦀",
	"🐝",
	"🤖",
	"🐘",
	"🐸",
	"🕷",
	"🐆",
	"🦕",
	"🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById(
	"fightButton"
);

fightButton.addEventListener(
	"click",
	function () {
		let random1 = Math.floor(
			Math.random() * fighters.length
		);
		let random2 = Math.floor(
			Math.random() * fighters.length
		);
		let fighter1 = fighters[random1];
		let fighter2 = fighters[random2];
		let stageEl =
			document.getElementById("stage");
		stageEl.textContent = `${fighter1} VS ${fighter2}`;
	}
);
