import * as math from 'mathjs';
import Direction from "../direction";

class Position {

    private readonly _vector : number[];

    constructor(x: number, y: number) {
        if (x < 0 || y < 0) {
            throw new Error("Invalid position: x and y value must have a minimum value of (0, 0)")
        }
        this._vector = [x, y];
    }

    move(direction : Direction, magnitude : number = 1): Position {
        return math.add(this._vector, math.multiply(direction.vector, magnitude))
    }

    get vector(): number[] {
        return this._vector;
    }
}

export default Position;