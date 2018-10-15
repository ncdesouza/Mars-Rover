
abstract class Direction {

    private readonly _name : string;
    private readonly _vector : number[];

    protected constructor(name : string, vector : number[]) {
        this._name = name;
        this._vector = vector;
    }


    get name() : string {
        return this._name;
    }

    get vector() : number[] {
        return this._vector;
    }

    abstract turnLeft(): Direction;

    abstract turnRight() : Direction;

}

export default Direction;