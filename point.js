const randomColour = [
    [244, 67, 54],
    [233, 30, 99],
    [156, 39, 176],
    [103, 58, 183],
    [63, 81, 181],
    [33, 150, 243],
    [3, 169, 244],
    [0, 188, 212],
    [0, 150, 136],
    [76, 175, 80],
    [139, 195, 74],
    [205, 220, 57],
    [255, 235, 59],
    [255, 193, 7],
    [255, 152, 0],
    [255, 87, 34]
];

function Particle(x, y) {
    this.target = {};
    this.setTarget(x, y);

    this.x = random(width);
    this.y = random(height);

    this.r = 7;

    this.colour = random(randomColour);
}

Particle.prototype.setTarget = function(x, y) {

    this.target.x = x;
    this.target.y = y;

};

Particle.prototype.update = function() {

    let easing = 0.1;

    let dX = this.target.x - this.x;
    let dY = this.target.y - this.y;


    this.x = this.x + (dX * easing);
    this.y = this.y + (dY * easing);

};

Particle.prototype.draw = function() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.r);
};