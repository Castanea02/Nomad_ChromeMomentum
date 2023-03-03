const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = img[Math.floor(Math.random() * quotes.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
