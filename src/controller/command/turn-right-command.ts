import Command from "./command";
import Rover from "../../rover/index";

class TurnRightCommand implements Command {

    run(rover: Rover) : void {
        rover.turnRight();
    }

}

export default TurnRightCommand;