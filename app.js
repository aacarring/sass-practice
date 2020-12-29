const button = document.querySelector('button');

function sendAlert() {
    alert("Would you look at that - the magic of Sass!");
}

button.addEventListener('click', sendAlert);