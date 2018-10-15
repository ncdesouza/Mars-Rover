import 'mocha';
import {expect} from "chai";
import CommandLineController from "./command-line-controller";

describe('CommandLineController => parseLine', () => {

    it('Test valid create plateau', () => {
        const cmdLineCtrl = new CommandLineController();
        expect(() => cmdLineCtrl.parseLine("Plateau:5 5")).to.not.throw();
    });

    it('Test2 valid create plateau', () => {
        const cmdLineCtrl = new CommandLineController();
        expect(() => cmdLineCtrl.parseLine("Plateau:3 5")).to.not.throw();
    });

    it('Test invalid create plateau', () => {
        const cmdLineCtrl = new CommandLineController();
        expect(() => cmdLineCtrl.parseLine("Plateau:-1 5")).to.throw();
    });

    it('Test valid landing', () => {
        const cmdLineCtrl = new CommandLineController();
        cmdLineCtrl.parseLine("Plateau:5 5");
        expect(() => cmdLineCtrl.parseLine("Rover1 Landing:1 2 N")).to.not.throw();
    });

    it('Test invalid landing', () => {
        const cmdLineCtrl = new CommandLineController();
        expect(() => cmdLineCtrl.parseLine("Rover1 Landing:1 2 N")).to.throw();
    });


    it('Test valid instructions', () => {
        const cmdLineCtrl = new CommandLineController();
        cmdLineCtrl.parseLine("Plateau:5 5");
        cmdLineCtrl.parseLine("Rover1 Landing:1 2 N");
        expect(() => cmdLineCtrl.parseLine("Rover1 Instructions:LMLMLMLMM")).to.not.throw();
    });

    it('Test invalid instructions', () => {
        const cmdLineCtrl = new CommandLineController();
        cmdLineCtrl.parseLine("Plateau:5 5");
        expect(() => cmdLineCtrl.parseLine("Rover1 Instructions:LMLMLMLMM")).to.throw();
    });

    it('Test invalid line', () => {
        const cmdLineCtrl = new CommandLineController();

        expect(() => cmdLineCtrl.parseLine("Bob:5 5")).to.throw();
    });

});