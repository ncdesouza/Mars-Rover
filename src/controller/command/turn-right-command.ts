import Command from "./command";
import Rover from "../../rover/index";
import Plateau from "../../plateau/plateau";
import RoverPositionMap from "../rover-position-map";
import Position from "../../util/position/position";

class TurnRightCommand implements Command {

    run(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) : Position {
        rover.turnRight();
        return rover.position;
    }

}

export default TurnRightCommand;