import Command from "./command";
import Rover from "../../rover/index";

class MoveCommand implements Command {

    run(rover: Rover) : void {
        rover.move();
    }

}

export default MoveCommand;