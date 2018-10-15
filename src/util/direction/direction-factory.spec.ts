import 'mocha';
import {expect} from "chai";
import DirectionFactory from "./direction-factory";
import North from "./north";
import South from "./south";
import East from "./east";
import West from "./west";

describe('DirectionFactory => static getDirection', () => {
    it('Test get North', () => {
        const direction = DirectionFactory.getDirection('N');
        expect(direction).to.eql(new North());
    });

    it('Test get South', () => {
        const direction = DirectionFactory.getDirection('S');
        expect(direction).to.eql(new South());
    });

    it('Test get East', () => {
        const direction = DirectionFactory.getDirection('E');
        expect(direction).to.eql(new East());
    });

    it('Test get West', () => {
        const direction = DirectionFactory.getDirection('W');
        expect(direction).to.eql(new West());
    });

    it('Test get invalid direction', () => {
        expect(() => DirectionFactory.getDirection('P')).to.throw();
    });

});