const welcomeEl =
	document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
	welcomeEl.textContent = `${greeting}, ${name}! ${emoji}`;
}

greetUser("Kikkeriki", "Per", "🐔");