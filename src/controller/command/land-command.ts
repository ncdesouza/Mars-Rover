import Command from "./command";
import Rover from "../../rover/index";
import Plateau from "../../plateau/plateau";
import Position from "../../util/position/position";
import RoverPositionMap from "../rover-position-map";

class LandCommand implements Command {

    run(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) : Position {

        let position = rover.position;

        if (roverPositionMap.isPositionOccupied(position)) {
            position = LandCommand.findEmptyLandingPosition(plateau, roverPositionMap);
        }

        if (!plateau.isValidPosition(position)) {
            throw Error("Can not land rover in an invalid position");
        }

        rover.land(position);

        return position;
    }

    private static findEmptyLandingPosition(plateau: Plateau, roverPositionMap: RoverPositionMap) : Position {
        for (let x = 0; x <= plateau.width; x++) {
            for (let y = 0; y <= plateau.length; y++) {
                const position = new Position(x, y);
                if (!roverPositionMap.isPositionOccupied(position)) {
                    return position;
                }
            }
        }
        throw Error("No available landing positions");
    }

}

export default LandCommand;