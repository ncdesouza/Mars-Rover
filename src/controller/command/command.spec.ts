import Plateau from "../../plateau/plateau";
import North from "../../util/direction/north";
import Position from "../../util/position/position";
import Rover from "../../rover/rover";

import 'mocha';
import {expect} from "chai";
import Command from "./command";
import MoveCommand from "./move-command";
import TurnRightCommand from "./turn-right-command";
import TurnLeftCommand from "./turn-left-command";

describe('MoveCommand', () => {
    const plateau = new Plateau(5, 5);
    const direction = new North();
    const position = new Position(1, 2);
    const position2 = new Position(1, 5);
    const rover = new Rover('Rover1', position, direction, plateau);
    const rover2 = new Rover('Rover2', position2, direction, plateau);

    const cmd : Command = new MoveCommand();

    it('Test valid move', () => {
        expect(() => cmd.run(rover)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover1:1 3 N');
    });

    it('Test invalid move', () => {
        expect(() => cmd.run(rover2)).to.throw();
        expect(rover2.getLocationString()).to.equal('Rover2:1 5 N');
    });
});

describe('TurnRightCommand', () => {
    const plateau = new Plateau(5, 5);
    const direction = new North();
    const position = new Position(1, 2);
    const rover = new Rover('Rover1', position, direction, plateau);

    const cmd : Command = new TurnRightCommand();

    it('Test valid turn', () => {
        expect(() => cmd.run(rover)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 E');
    });
});

describe('TurnLeftCommand', () => {
    const plateau = new Plateau(5, 5);
    const direction = new North();
    const position = new Position(1, 2);
    const rover = new Rover('Rover1', position, direction, plateau);

    const cmd : Command = new TurnLeftCommand();

    it('Test valid turn', () => {
        expect(() => cmd.run(rover)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 W');
    });
});