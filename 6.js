let hands = ["rock", "paper", "scissor"];

const rps = () => {
	let randomNumber = Math.floor(
		Math.random() * hands.length
	);
	// console.log(randomNumber);
	return hands[randomNumber];
};

console.log(rps());
