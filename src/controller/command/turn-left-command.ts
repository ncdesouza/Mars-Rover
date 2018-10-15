import Command from "./command";
import Rover from "../../rover/index";

class TurnLeftCommand implements Command {

    run(rover: Rover) : void {
        rover.turnLeft();
    }

}

export default TurnLeftCommand;