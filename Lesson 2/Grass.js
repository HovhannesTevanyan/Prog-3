class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var newCell = random(this.yntrelVandak(0));
        if(this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0],newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
    mult() {

        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 1) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY, this.index)
            grassArr.push(newGr)
            this.multiply = 0;
        }
    }
}
