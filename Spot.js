class Spot {

    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.colour = c;
        this.color = getColour(this.colour)

    }

    show() {
        
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, 20, 20);
    }
     
    showLine() {
        
        stroke(this.color);
        //fill(this.colour);
        strokeWeight(2);
        line (this.x,this.y,mouseX,mouseY);
    }


}

function getColour(c_) {
    if (c_ == 'r')
        return color(255, 0, 0);

    if (c_ == 'g')
        return color(0, 255, 0);

    if (c_ == 'b')
        return color(0, 0, 255);

    if (c_ == 'p')
        return color(255, 192, 203);
}