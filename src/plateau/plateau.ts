import Position from "../util/position/position";

class Plateau {

    private readonly _width : number;
    private readonly _length : number;

    constructor(width: number, length: number) {
        if (width <= 0 || length <= 0) {
            throw new Error("Plateau must be a minimum size of 1 x 1");
        }
        this._width = width;
        this._length = length;
    }

    isValidPosition(position : Position) : boolean {
        let [x, y] = position.vector;
        return x >= 0 && x <= this._width && y >=0 && y <= this._length;
    }


    get width(): number {
        return this._width;
    }

    get length(): number {
        return this._length;
    }
}

export default Plateau;