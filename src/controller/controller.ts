import Rover from "../rover";
import Plateau from "../plateau/plateau";
import RoverPositionMap from "./rover-position-map";
import Position from "../util/position/position";
import Command from "./command/command";

class Controller {

    private readonly _rover : Rover;
    private readonly _plateau : Plateau;
    private readonly _roverPositionMap : RoverPositionMap;

    constructor(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) {
        this._rover = rover;
        this._plateau = plateau;
        this._roverPositionMap = roverPositionMap;
    }

    sendCommand(cmd : Command) : Position {
        return cmd.run(this._rover, this._plateau, this._roverPositionMap);
    }

    getLocation() : string {
        return this._rover.getLocationString();
    }
}

export default Controller;