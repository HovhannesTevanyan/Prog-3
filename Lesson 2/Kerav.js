class kerav {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 5;
        this.energy = 10;
        this.directions = [];
    }

    getNewDirections() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var kr = new kerav(newX, newY, 5)
            keravArr.push(kr)
        }
    }
    move() {

        var newCell = random(this.chooseCell(0));
        var newCell2 = random(this.chooseCell(1));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;

        }
        else if (newCell2) {
            var newX2 = newCell2[0];
            var newY2 = newCell2[1];


            matrix[this.y][this.x] = 1;
            matrix[newY2][newX2] = this.index;

            this.y = newY2;
            this.x = newX2;
            this.energy--;

        }
    }
    eat() {
        var food = random(this.chooseCell(4))

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in varakrArr) {
                if (varakrArr[i].x == newX && varakrArr[i].y == newY) {
                    varakrArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 4
        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in keravArr) {
                if (keravArr[i].x == this.x && keravArr[i].y == this.y) {
                    keravArr.splice(i, 1)
                }
            }
        }
    }
}