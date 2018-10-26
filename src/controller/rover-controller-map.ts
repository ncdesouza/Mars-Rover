import Controller from "./controller";

class RoverControllerMap {

    private readonly _roverControllers : { [key: string] : Controller };

    constructor() {
        this._roverControllers = {};
    }

    getController(name : string) : Controller {
        return this._roverControllers[name];
    }

    setController(name : string, controller : Controller) : void {
        this._roverControllers[name] = controller;
    }

}

export default RoverControllerMap;