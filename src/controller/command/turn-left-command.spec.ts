import Plateau from "../../plateau/plateau";
import North from "../../util/direction/north";
import Position from "../../util/position/position";
import Rover from "../../rover/rover";

import 'mocha';
import {expect} from "chai";
import Command from "./command";
import TurnLeftCommand from "./turn-left-command";


describe('TurnLeftCommand', () => {
    const plateau = new Plateau(5, 5);
    const direction = new North();
    const position = new Position(1, 2);
    const rover = new Rover('Rover1', position, direction);

    const cmd : Command = new TurnLeftCommand();

    it('Test valid turn', () => {
        expect(() => cmd.run(rover, this._plateau, this._roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 W');
    });
});