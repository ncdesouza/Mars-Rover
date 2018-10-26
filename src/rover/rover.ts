import Position from "../util/position";
import {Direction} from "../util/direction";

class Rover {

    private readonly _name : string;
    private _position : Position;
    private _direction : Direction;


    constructor(name: string, position: Position, direction: Direction) {
        this._name = name;
        this._position = position;
        this._direction = direction;
    }

    get position() : Position {
        return this._position;
    }

    land(position : Position) {
        this._position = position
    }

    peekMove() : Position {
        return this._position.move(this._direction);
    }

    move() : void {
        this._position = this.peekMove();
    }

    turnRight() : void {
        this._direction = this._direction.turnRight();
    }

    turnLeft() : void {
        this._direction = this._direction.turnLeft();
    }

    getLocationString() : string {
        let [x, y] = this._position.vector;
        return `${this._name}:${x} ${y} ${this._direction.name}`
    }

}

export default Rover;