const height = 400;
const width = 800;

// load the font
let font;
let points1 = [];
let points2 = [];

let particles = [];

let t = false;

setInterval(function() {
    if (t) {
        setText(points1);
    } else {
        setText(points2);
    }

    t = !t;
}, 2000);

function setup() {
    font = loadFont("https://t-reimer.github.io/fonts/Countryside%20Two%20Personal%20use.ttf");

    createCanvas(800, 400);

    // textSize(148);
    // text("I Love You", 50, 100, 800, 400);

    setTimeout(function() {
        points1 = font.textToPoints("I Love You", 30, 150, 132);

        for (let i = 0; i < points1.length; i++) {
            particles.push(new Particle(points1[i].x, points1[i].y));
        }

        points2 = font.textToPoints("[AMANDA]", 0, 350, 90);
    }, 250);
}

function draw() {
    background(255);
    // noLoop();
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        p.draw();
    }
}


function setText(points) {
    particles.shuffle();

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        let index = i % points.length;

        p.setTarget(points[index].x, points[index].y);
    }
}



Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}