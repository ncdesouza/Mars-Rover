import Plateau from "../../plateau/plateau";
import North from "../../util/direction/north";
import Position from "../../util/position/position";
import Rover from "../../rover/rover";

import 'mocha';
import {expect} from "chai";
import Command from "./command";
import RoverPositionMap from "../rover-position-map";
import LandCommand from "./land-command";

describe('LandCommand', () => {

    const cmd : Command = new LandCommand();

    it('Test valid land', () => {
        const plateau = new Plateau(5, 5);
        const roverPositionMap = new RoverPositionMap();
        const rover = new Rover('Rover1', new Position(1, 2), new North());
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 N');
    });

    it('Test invalid land', () => {
        const plateau = new Plateau(1, 5);
        const roverPositionMap = new RoverPositionMap();
        const rover = new Rover('Rover1', new Position(2, 1), new North());
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.throw();
    });

    it('Test reposition land', () => {
        const plateau = new Plateau(5, 5);
        const roverPositionMap = new RoverPositionMap();
        const rover = new Rover('Rover1', new Position(2, 1), new North());
        roverPositionMap.setPosition('Rover1', cmd.run(rover, plateau, roverPositionMap));
        const rover2 = new Rover('Rover2', new Position(2, 1), new North());
        const position = cmd.run(rover2, plateau, roverPositionMap);
        expect(position).to.deep.equal(new Position(0, 0))
    });

    it('Test all positions occupied error', () => {
        const plateau = new Plateau(1, 1);
        const roverPositionMap = new RoverPositionMap();
        roverPositionMap.setPosition('Rover1', cmd.run(new Rover('Rover1', new Position(0, 0), new North()), plateau, roverPositionMap));
        roverPositionMap.setPosition('Rover2', cmd.run(new Rover('Rover2', new Position(0, 1), new North()), plateau, roverPositionMap));
        roverPositionMap.setPosition('Rover3', cmd.run(new Rover('Rover3', new Position(1, 0), new North()), plateau, roverPositionMap));
        roverPositionMap.setPosition('Rover4', cmd.run(new Rover('Rover4', new Position(1, 0), new North()), plateau, roverPositionMap));

        const rover5 = new Rover('Rover2', new Position(0, 0), new North());
        expect(() => cmd.run(rover5, plateau, roverPositionMap)).to.throw();
    });

});