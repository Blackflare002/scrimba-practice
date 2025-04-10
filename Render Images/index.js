// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
	"images/hip1.jpg",
	"images/hip2.jpg",
	"images/hip3.jpg",
];

let container =
	document.getElementById("container");

const renderImages = (arr) => {
	let images = "";
	const lastIndex = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (i === lastIndex) {
			images += `<img class="team-img" src=${arr[i]}></img>`;
		} else {
			images += `<img class="team-img" src=${arr[i]}></img> `;
		}
	}
	console.log(images);
	container.innerHTML += images;
};

renderImages(imgs);

////////////////////////////////////////

// const container = document.getElementById("container")

function renderImages() {
	let imgsDOM = "";
	for (let i = 0; i < imgs.length; i++) {
		imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
	}
	container.innerHTML = imgsDOM;
}

renderImages();
