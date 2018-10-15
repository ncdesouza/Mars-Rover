import Direction from "./direction";
import North from "./north";
import South from "./south";
import East from "./east";
import West from "./west";


class DirectionFactory {

    static getDirection(char : string) : Direction {
        switch (char) {
            case 'N':
                return new North();

            case 'S':
                return new South();

            case 'E':
                return new East();

            case 'W':
                return new West();

            default:
                throw new Error('Invalid Cardinal Compass Point');
        }
    }
}

export default DirectionFactory;