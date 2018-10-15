import Rover from "../rover";
import {Command} from "./command";

class Controller {

    private readonly _rover : Rover;

    constructor(rover : Rover) {
        this._rover = rover;
    }

    sendCommand(cmd : Command) {
        cmd.run(this._rover);
    }

    getLocation() : string {
        return this._rover.getLocationString();
    }
}

export default Controller;