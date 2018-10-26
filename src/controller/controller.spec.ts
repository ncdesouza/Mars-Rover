import 'mocha';
import {expect} from "chai";
import Controller from "./controller";
import Plateau from "../plateau/plateau";
import North from "../util/direction/north";
import Position from "../util/position/position";
import Rover from "../rover/rover";
import MoveCommand from "./command/move-command";
import TurnLeftCommand from "./command/turn-left-command";
import TurnRightCommand from "./command/turn-right-command";
import RoverPositionMap from "./rover-position-map";

describe('CommandLineController => parseLine', () => {
    const plateau = new Plateau(5, 5);
    const direction = new North();
    const position = new Position(1, 2);
    const rover = new Rover('Rover1', position, direction);
    const roverPositions = new RoverPositionMap();


    const controller = new Controller(rover,plateau, roverPositions);
    const moveCmd = new MoveCommand();
    const leftTurnCmd = new TurnLeftCommand();
    const rightTurnCmd = new TurnRightCommand();

    it('Test sendCommand => move', () => {
        expect(() => controller.sendCommand(moveCmd)).to.not.throw();
    });

    it('Test sendCommand => left', () => {
        expect(() => controller.sendCommand(leftTurnCmd)).to.not.throw();
    });

    it('Test sendCommand => right', () => {
        expect(() => controller.sendCommand(rightTurnCmd)).to.not.throw();
    });

    it('Test sendCommand => right', () => {
        let location : string;
        expect(() => location = controller.getLocation()).to.not.throw();
        expect(location).to.equal("Rover1:1 3 N");
    });
});