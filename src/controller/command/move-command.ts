import Command from "./command";
import Rover from "../../rover/index";
import Plateau from "../../plateau/plateau";
import RoverPositionMap from "../rover-position-map";
import Position from "../../util/position/position";

class MoveCommand implements Command {

    run(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) : Position {
        const nextPosition : Position = rover.peekMove();

        if (roverPositionMap.isPositionOccupied(nextPosition)) {
            return rover.position;
        }

        if (!plateau.isValidPosition(nextPosition)) {
            throw new Error("The position after the move would exceeds the boundary of the plateau.")
        }

        rover.move();

        return nextPosition;
    }

}

export default MoveCommand;