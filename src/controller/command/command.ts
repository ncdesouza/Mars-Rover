import Rover from "../../rover/index";
import Plateau from "../../plateau/plateau";
import RoverPositionMap from "../rover-position-map";
import Position from "../../util/position/position";

interface Command {

    run(rover: Rover, plateau: Plateau, roverPositionMap: RoverPositionMap) : Position;

}

export default Command;