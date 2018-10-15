import Plateau from "../plateau";
import Position from "../util/position";
import Direction from "../util/direction";

class Rover {

    private readonly _name : string;
    private _position : Position;
    private _direction : Direction;
    private _plateau : Plateau;


    constructor(name: string, position: Position, direction: Direction, plateau : Plateau) {
        this._name = name;
        this._position = position;
        this._direction = direction;
        this._plateau = plateau;
    }

    move() : void {
        const positionAfterMove = this._position.move(this._direction);

        if (this._plateau.isValidPosition(positionAfterMove)) {

            this._position = positionAfterMove;

        } else {

            throw new Error("The position after the move would exceeds the boundary of the plateau.")

        }
    }

    turnRight() : void {
        this._direction = this._direction.turnRight();
    }

    turnLeft() : void {
        this._direction = this._direction.turnLeft();
    }

    getLocationString() : string {
        let [x, y] = this._position.vector;
        return `${this._name} ${x} ${y} ${this._direction.name}`
    }

}

export default Rover;