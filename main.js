// template filtering

let originalDisplay = [];
function filterProducts(filter) {
    var products = document.querySelectorAll('.product');
    originalDisplay = [];
    for (var i = 0; i < products.length; i++) {
        originalDisplay.push(products[i].style.display);
        if (products[i].id === filter.substring(1)) {
            products[i].classList.remove('hidden');
            products[i].classList.add('fade-in');
        } else {
            products[i].classList.remove('fade-in');
            products[i].classList.add('hidden');
        }
    }
}

function resetFilter() {
    var products = document.querySelectorAll('.product');
    for (var i = 0; i < products.length; i++) {
        products[i].classList.remove('hidden');
        products[i].classList.add('fade-in');
    }
}

// video player

let video1 = document.getElementById('video1');
console.log(video1);
let playBtn = document.getElementById('play');
console.log(playBtn);

playBtn.addEventListener("click", () => {
    if (playBtn.getAttribute("name") === "pause-outline") {
        playBtn.setAttribute("name", "play-outline")
        video1.pause();
    } else {
        playBtn.setAttribute("name", "pause-outline")
        video1.play();
    }
})


// script for play pause earth video
let earthVideo = document.getElementById('earthVideo');
let earthPlay = document.getElementById('earthPlay');

earthPlay.addEventListener("click", () => {
    if (earthPlay.getAttribute("name") === "pause-outline") {
        earthPlay.setAttribute("name", "play-outline")
        earthVideo.pause();
    } else {
        earthPlay.setAttribute("name", "pause-outline")
        earthVideo.play();
    }
})
