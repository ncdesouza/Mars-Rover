import Position from "../util/position/position";

class RoverPositionMap {

    private readonly _roverPositions : { [key: string] : Position };

    constructor() {
        this._roverPositions = {};
    }

    setPosition(name : string, position : Position) : void {
        this._roverPositions[name] = position;
    }

    isPositionOccupied(position : Position) : boolean {
        for (let name in this._roverPositions) {
            const otherPosition = this._roverPositions[name];
            if (position.vector[0] === otherPosition.vector[0] && position.vector[1] === otherPosition.vector[1]) {
                return true;
            }
        }
        return false;
    }

}

export default RoverPositionMap;