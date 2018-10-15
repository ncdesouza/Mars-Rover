import Rover from "../../rover/index";

interface Command {

    run(rover : Rover) : void;

}

export default Command;