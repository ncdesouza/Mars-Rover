import {expect} from 'chai';
import 'mocha';
import Position from "./position";
import {Direction, East, North, South, West} from "../direction";

describe('Initialize', () => {
    it('Test valid position', () => {
        expect(() => new Position(0, 0)).not.throw("Invalid position: x and y value must have a minimum value of (0, 0)");
    });
    it('Test invalid position', () => {
        expect(() => new Position(-1, -1)).to.throw("Invalid position: x and y value must have a minimum value of (0, 0)");
    });
    it('Test invalid position x', () => {
        expect(() => new Position(-1, 0)).to.throw("Invalid position: x and y value must have a minimum value of (0, 0)");
    });
    it('Test invalid position y', () => {
        expect(() => new Position(0, -1)).to.throw("Invalid position: x and y value must have a minimum value of (0, 0)");
    });
});

describe('Move method', () => {
    it('Test move North', () => {
        const position : Position = new Position(0, 0);
        const direction : Direction = new North();
        const positionAfterMove = position.move(direction);
        expect(positionAfterMove.vector).to.eql([0, 1]);
    });
    it('Test move South', () => {
        const position : Position = new Position(0, 2);
        const direction : Direction = new South();
        const positionAfterMove = position.move(direction);
        expect(positionAfterMove.vector).to.eql([0, 1]);
    });
    it('Test move East', () => {
        const position : Position = new Position(0, 0);
        const direction : Direction = new East();
        const positionAfterMove = position.move(direction);
        expect(positionAfterMove.vector).to.eql([1, 0]);
    });
    it('Test move West', () => {
        const position : Position = new Position(2, 0);
        const direction : Direction = new West();
        const positionAfterMove = position.move(direction);
        expect(positionAfterMove.vector).to.eql([1, 0]);
    });

    it('Test move North with magnitude', () => {
        const position : Position = new Position(0, 0);
        const direction : Direction = new North();
        const positionAfterMove = position.move(direction, 2);
        expect(positionAfterMove.vector).to.eql([0, 2]);
    });
    it('Test move South with magnitude', () => {
        const position : Position = new Position(0, 4);
        const direction : Direction = new South();
        const positionAfterMove = position.move(direction, 2);
        expect(positionAfterMove.vector).to.eql([0, 2]);
    });
    it('Test move East with magnitude', () => {
        const position : Position = new Position(0, 0);
        const direction : Direction = new East();
        const positionAfterMove = position.move(direction, 2);
        expect(positionAfterMove.vector).to.eql([2, 0]);
    });
    it('Test move West with magnitude', () => {
        const position : Position = new Position(4, 0);
        const direction : Direction = new West();
        const positionAfterMove = position.move(direction, 2);
        expect(positionAfterMove.vector).to.eql([2, 0]);
    });
});