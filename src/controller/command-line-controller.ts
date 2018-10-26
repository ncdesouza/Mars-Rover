import Controller from "./controller";
import Plateau from "../plateau/plateau";
import Rover from "../rover/rover";
import DirectionFactory from "../util/direction/direction-factory";
import MoveCommand from "./command/move-command";
import TurnLeftCommand from "./command/turn-left-command";
import TurnRightCommand from "./command/turn-right-command";
import Command from "./command/command";
import RoverPositionMap from "./rover-position-map";
import RoverControllerMap from "./rover-controller-map";
import LandCommand from "./command/land-command";
import Position from "../util/position/position";

const COMMAND_MAP : { [key: string] : Command } = {
    'M': new MoveCommand(),
    'L': new TurnLeftCommand(),
    'R': new TurnRightCommand()
};

class CommandLineController {

    private _plateau : Plateau;
    private readonly _controllerMap : RoverControllerMap;
    private readonly _roverPositions : RoverPositionMap;

    constructor() {
        this._controllerMap = new RoverControllerMap();
        this._roverPositions = new RoverPositionMap();
    }

    parseLine(line : string) : string {
        const [command, params] = line.split(':');

        if (command === 'Plateau') {
            this.buildAndExecutePlateauConfigurationCommand(params);
            return;

        } else {
            const [name, subCommand] = command.split(" ");

            switch (subCommand) {
                case 'Landing': {
                    this.buildAndExecuteLandingCommand(params, name);
                    return;
                }

                case 'Instructions': {
                    return this.buildAndExecuteInstructionsCommand(params, name);
                }

                default:
                    throw new Error('Invalid command.');
            }

        }

    }


    private buildAndExecutePlateauConfigurationCommand(params: string) : void {
        const [length, width] = params.split(" ");
        this.configurePlateau(parseInt(length), parseInt(width));
    }

    private buildAndExecuteLandingCommand(params: string, name: string) : void {

        if (!this._plateau) {
            throw new Error('Plateau must be configured prior to landing a rover');
        }

        const [x, y, cardinalDirection] = params.split(" ");

        this.deployRover(name, parseInt(x), parseInt(y), cardinalDirection);
    }

    private buildAndExecuteInstructionsCommand(params: string, name: string) : string {
        const commands : Command[] = [];
        for (let i = 0; i < params.length; i++) {
            const cmdChar = params[i];
            commands.push(COMMAND_MAP[cmdChar]);
        }

        return this.runCommands(name, commands);
    }

    private configurePlateau(length : number, width : number) : void {
        this._plateau = new Plateau(length, width);
    }

    private deployRover(name : string, x : number, y : number, cardinalDirection) : void {
        const position = new Position(x, y);
        const direction = DirectionFactory.getDirection(cardinalDirection);
        const rover = new Rover(name, position, direction);
        const controller = new Controller(rover, this._plateau, this._roverPositions);
        this._controllerMap.setController(name, controller);

        const landedPosition = controller.sendCommand(new LandCommand());

        this._roverPositions.setPosition(name, landedPosition);

    }

    private runCommands(name : string, commands : Command[]) : string {
        const controller = this._controllerMap.getController(name);

        if (!controller) {
            throw new Error('No rover found. Rover must be landed on plateau before providing instructions.')
        }

        for (const command of commands) {

            const nextPosition = controller.sendCommand(command);
            this._roverPositions.setPosition(name, nextPosition);

        }

        return controller.getLocation();
    }
}

export default CommandLineController;