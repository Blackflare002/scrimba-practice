const container =
	document.getElementById("container");
container.innerHTML = "<button>Buy!</button>";
container.innerHTML =
	"<button onclick='buy()'>Buy!</button>";
const buy = () => {
	container.innerHTML +=
		"<p>Thanks for buying!</p>";
};
