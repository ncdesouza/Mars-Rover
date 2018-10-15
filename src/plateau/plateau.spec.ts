import {expect} from 'chai';
import 'mocha';
import Position from "../util/position";
import Plateau from "./plateau";


describe('Plateau => initialization', () => {
    it('Test valid size', () => {
        expect(() => new Plateau(2, 2)).not.throw("Plateau must be a minimum size of 1 x 1");
    });
    it('Test invalid size', () => {
        expect(() => new Plateau(0, 0)).to.throw("Plateau must be a minimum size of 1 x 1");
    });
    it('Test invalid width', () => {
        expect(() => new Plateau(0, 2)).to.throw("Plateau must be a minimum size of 1 x 1");
    });
    it('Test invalid length', () => {
        expect(() => new Plateau(2, 0)).to.throw("Plateau must be a minimum size of 1 x 1");
    });
});

describe('Plateau => isValidPosition method', () => {
    it('Test valid position origin', () => {
        const plateau = new Plateau(4, 4);
        const position : Position = new Position(0, 0);
        let isValidPosition = plateau.isValidPosition(position);
        expect(isValidPosition).to.equal(true);
    });
    it('Test valid position boundary', () => {
        const plateau = new Plateau(4, 4);
        const position : Position = new Position(3, 3);
        let isValidPosition = plateau.isValidPosition(position);
        expect(isValidPosition).to.equal(true);

    });
    it('Test invalid position', () => {
        const plateau = new Plateau(2, 2);
        const position : Position = new Position(3, 3);
        let isValidPosition = plateau.isValidPosition(position);
        expect(isValidPosition).to.equal(false);

    });
});