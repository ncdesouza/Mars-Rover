import * as readline from "readline";
import CommandLineController from './controller/command-line-controller';

const reader = readline.createInterface({
    input: process.stdin,
});

const cmdController : CommandLineController = new CommandLineController();

reader.on("line", (line : string) => {
    try {
        const ret : string = cmdController.parseLine(line);
        if (ret) {
            console.log(ret)
        }
    } catch (e) {
        console.log(e.message)
    }

});