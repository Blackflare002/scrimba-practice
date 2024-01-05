let hands = ["rock", "paper", "scissor"];

const rps = () => {
	let randomNumber = Math.floor(
		Math.random() * hands.length
	);
	return hands[randomNumber];
};

console.log(rps());
