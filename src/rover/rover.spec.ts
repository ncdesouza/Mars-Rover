import 'mocha';
import {expect} from "chai";

import Plateau from "../plateau/plateau";
import North from "../util/direction/north";
import Position from "../util/position/position";
import Rover from "./rover";
import South from "../util/direction/south";
import West from "../util/direction/west";
import East from "../util/direction/east";

describe('Rover => move', () => {

    it('Test valid Landing', () => {
        const direction = new North();
        const position = new Position(1, 4);
        expect(() => { new Rover('Rover1', position, direction) }).not.throw();
    });

});

describe('Rover => move', () => {

    it('Test move North', () => {
        const direction = new North();
        const position = new Position(1, 2);
        const rover = new Rover('Rover1', position, direction);
        rover.move();
        expect(rover.getLocationString()).to.equal('Rover1:1 3 N');
    });


    it('Test move South', () => {
        const direction = new South();
        const position = new Position(1, 2);
        const rover = new Rover('Rover1', position, direction);
        rover.move();
        expect(rover.getLocationString()).to.equal('Rover1:1 1 S');
    });


    it('Test move West', () => {
        const direction = new West();
        const position = new Position(1, 2);
        const rover = new Rover('Rover1', position, direction);
        rover.move();
        expect(rover.getLocationString()).to.equal('Rover1:0 2 W');
    });


    it('Test move East', () => {
        const direction = new East();
        const position = new Position(1, 2);
        const rover = new Rover('Rover1', position, direction);
        rover.move();
        expect(rover.getLocationString()).to.equal('Rover1:2 2 E');
    });


});

describe('Rover => turnLeft', () => {
    const position = new Position(1, 2);


    it('Test turn left from North', () => {
        const direction = new North();
        const rover = new Rover('Rover1', position, direction);
        rover.turnLeft();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 W');
    });
    it('Test turn left from West', () => {
        const direction = new West();
        const rover = new Rover('Rover1', position, direction);
        rover.turnLeft();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 S');
    });

    it('Test turn left from South', () => {
        const direction = new South();
        const rover = new Rover('Rover1', position, direction);
        rover.turnLeft();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 E');
    });

    it('Test turn left from East', () => {
        const direction = new East();
        const rover = new Rover('Rover1', position, direction);
        rover.turnLeft();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 N');
    });
});

describe('Rover => turnRight', () => {
    const plateau = new Plateau(5, 5);
    const position = new Position(1, 2);

    it('Test turn right from North', () => {
        const direction = new North();
        const rover = new Rover('Rover1', position, direction);
        rover.turnRight();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 E');
    });
    it('Test turn right from East', () => {
        const direction = new East();
        const rover = new Rover('Rover1', position, direction);
        rover.turnRight();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 S');
    });
    it('Test turn right from South', () => {
        const direction = new South();
        const rover = new Rover('Rover1', position, direction);
        rover.turnRight();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 W');
    });
    it('Test turn right from West', () => {
        const direction = new West();
        const rover = new Rover('Rover1', position, direction);
        rover.turnRight();
        expect(rover.getLocationString()).to.equal('Rover1:1 2 N');
    });
});