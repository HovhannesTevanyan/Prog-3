var matrix = [];
var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var varakrArr = [];
var keravArr = [];
var n = 50;
var m = 50;


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(5));
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var vk = new Varak(x, y)
                varakrArr.push(vk)
            }
            else if (matrix[y][x] == 5) {
                var kr = new kerav(x, y)
                keravArr.push(kr)
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black")
            }
            else if (matrix[y][x] == 0) {
                fill("white")
            }
            else if (matrix[y][x] == 4) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 5) {
                fill("red")
            }
            rect(x * side, y * side, side, side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()

    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].mult()
        xotakerArr[i].move()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].eat()
        gishatichArr[i].die()

    }

    for (var i in varakrArr) {
        varakrArr[i].move()
        varakrArr[i].mult()
        varakrArr[i].eat()
        varakrArr[i].die()

    }
    for (var i in keravArr) {
        keravArr[i].eat()
        keravArr[i].move()
        keravArr[i].mult()
        keravArr[i].die()

    }
}

