import Command from "./command";
import Rover from "../../rover/index";
import Plateau from "../../plateau/plateau";
import RoverPositionMap from "../rover-position-map";
import Position from "../../util/position/position";

class TurnLeftCommand implements Command {

    run(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) : Position {
        rover.turnLeft();
        return rover.position;
    }

}

export default TurnLeftCommand;