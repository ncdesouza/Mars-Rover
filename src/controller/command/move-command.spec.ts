import Plateau from "../../plateau/plateau";
import North from "../../util/direction/north";
import Position from "../../util/position/position";
import Rover from "../../rover/rover";

import 'mocha';
import {expect} from "chai";
import Command from "./command";
import MoveCommand from "./move-command";
import East from "../../util/direction/east";
import RoverPositionMap from "../rover-position-map";
import South from "../../util/direction/south";
import West from "../../util/direction/west";

describe('MoveCommand', () => {
    const cmd : Command = new MoveCommand();

    it('Test rectangle plateau move', () => {
        const plateau = new Plateau(1, 5);
        const roverPositionMap = new RoverPositionMap();
        const direction = new North();
        const position = new Position(1, 2);
        const rover = new Rover('Rover3', position, direction);
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal("Rover3:1 3 N");
    });

    it('Test rectangle plateau move', () => {
        const plateau = new Plateau(1, 5);
        const roverPositionMap = new RoverPositionMap();
        const direction = new North();
        const position = new Position(1, 2);
        const rover = new Rover('Rover', position, direction);
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal("Rover:1 3 N");
    });

});

describe('MoveCommand - North', () => {
    const plateau = new Plateau(5, 5);
    const cmd : Command = new MoveCommand();

    it('Test valid move north', () => {
        const rover = new Rover('Rover', new Position(1, 2),  new North());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover:1 3 N');
    });

    it('Test invalid move north out of bounds', () => {
        const rover = new Rover('Rover', new Position(5, 5),  new North());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.throw();
        expect(rover.getLocationString()).to.equal('Rover:5 5 N');
    });

    it('Test invalid move into occupied space', () => {
        const position = new Position(3, 3);
        const rover = new Rover('Rover', position,  new North());
        const rover2 = new Rover('Rover2', new Position(3, 4),  new North());
        const roverPositionMap = new RoverPositionMap();
        roverPositionMap.setPosition('Rover', rover.position);
        roverPositionMap.setPosition('Rover2', rover2.position);
        const positionAfterMove = cmd.run(rover, plateau, roverPositionMap);
        expect(positionAfterMove).to.deep.equal(position);
    });

});

describe('MoveCommand - South', () => {
    const plateau = new Plateau(5, 5);
    const cmd : Command = new MoveCommand();


    it('Test valid move south', () => {
        const rover = new Rover('Rover', new Position(1, 2),  new South());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover:1 1 S');
    });

    it('Test invalid move south', () => {
        const rover = new Rover('Rover', new Position(0, 0),  new South());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.throw();
        expect(rover.getLocationString()).to.equal('Rover:0 0 S');
    });

    it('Test invalid move into occupied space', () => {
        const position = new Position(3, 3);
        const rover = new Rover('Rover', position,  new South());
        const rover2 = new Rover('Rover2', new Position(3, 2),  new South());
        const roverPositionMap = new RoverPositionMap();
        roverPositionMap.setPosition('Rover', rover.position);
        roverPositionMap.setPosition('Rover2', rover2.position);
        const positionAfterMove = cmd.run(rover, plateau, roverPositionMap);
        expect(positionAfterMove).to.deep.equal(position);
    });

});

describe('MoveCommand - West', () => {
    const plateau = new Plateau(5, 5);

    const cmd : Command = new MoveCommand();


    it('Test valid move west', () => {
        const rover = new Rover('Rover', new Position(1, 2),  new West());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover:0 2 W');
    });

    it('Test invalid move west', () => {
        const rover = new Rover('Rover', new Position(0, 0),  new West());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.throw();
        expect(rover.getLocationString()).to.equal('Rover:0 0 W');
    });

    it('Test invalid move into occupied space', () => {
        const position = new Position(3, 3);
        const rover = new Rover('Rover', position,  new West());
        const rover2 = new Rover('Rover2', new Position(2, 3),  new West());
        const roverPositionMap = new RoverPositionMap();
        roverPositionMap.setPosition('Rover', rover.position);
        roverPositionMap.setPosition('Rover2', rover2.position);
        const positionAfterMove = cmd.run(rover, plateau, roverPositionMap);
        expect(positionAfterMove).to.deep.equal(position);
    });
});


describe('MoveCommand - East', () => {
    const plateau = new Plateau(5, 5);

    const cmd : Command = new MoveCommand();

    it('Test valid move east', () => {
        const rover = new Rover('Rover', new Position(1, 2),  new East());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.not.throw();
        expect(rover.getLocationString()).to.equal('Rover:2 2 E');
    });

    it('Test invalid move east', () => {
        const rover = new Rover('Rover', new Position(5, 5),  new East());
        const roverPositionMap = new RoverPositionMap();
        expect(() => cmd.run(rover, plateau, roverPositionMap)).to.throw();
        expect(rover.getLocationString()).to.equal('Rover:5 5 E');
    });

    it('Test invalid move into occupied space', () => {
        const position = new Position(3, 3);
        const rover = new Rover('Rover', position,  new East());
        const rover2 = new Rover('Rover2', new Position(4, 3),  new East());
        const roverPositionMap = new RoverPositionMap();
        roverPositionMap.setPosition('Rover', rover.position);
        roverPositionMap.setPosition('Rover2', rover2.position);
        const positionAfterMove = cmd.run(rover, plateau, roverPositionMap);
        expect(positionAfterMove).to.deep.equal(position);
    });

});