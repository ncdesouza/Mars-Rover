import 'mocha';
import {expect} from "chai";

import Plateau from "../plateau/plateau";

describe('Rover => move', () => {
    it('Test valid move', () => {
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