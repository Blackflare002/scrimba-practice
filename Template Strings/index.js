// template strings/literals

const recipient = "James";

// Refactor the email string to use template strings
const email =
	// "Hey " +
	// recipient +
	// "! How is it going? Cheers Per";
	`Hey ${recipient}, how's it going? Cheers, Per.`;

console.log(email);