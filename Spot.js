class Spot {

    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.colour = c;
        this.color = getColour(this.colour)
        this.color.setAlpha(255);
        this.distance;

    }

    show() {

        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, 20, 20);
    }

    calcDistance(x_, y_) {
        this.distance = dist(this.x, this.y, x_, y_);
    }

    showLine(c_) {

        stroke(getColour(c_));
        strokeWeight(2);
        line(this.x, this.y, mouseX, mouseY);
    }

}

function getColour(c_) {
    let alpha;
    if (coverageI.checked) {
        alpha = 100;
    } else alpha = 255;


    if (c_ == 'r' || c_ == 0)
        return color(255, 0, 0, alpha);

    if (c_ == 'g' || c_ == 1)
        return color(0, 255, 0, alpha);

    if (c_ == 'b' || c_ == 2)
        return color(0, 0, 255, alpha);

    if (c_ == 'p' || c_ == 3)
        return color(255, 192, 203, alpha);

    if (c_ == 'w')
        return color(255);
}